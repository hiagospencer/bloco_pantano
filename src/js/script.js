// Elementos do DOM
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const participateBtn = document.getElementById("participateBtn");
const heroCtaBtn = document.getElementById("heroCtaBtn");
const registrationModal = document.getElementById("registrationModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const registrationForm = document.getElementById("registrationForm");
const formContainer = document.getElementById("formContainer");
const successMessage = document.getElementById("successMessage");
const individualAbada = document.getElementById("individual");
const casadinhaAbada = document.getElementById("casadinha");
const shirtSizeIndividual = document.getElementById("shirtSizeIndividual");
const shirtSizeCasadinha = document.getElementById("shirtSizeCasadinha");
const shirtSizeSelect = document.getElementById("shirtSize");
const shirtSize1Select = document.getElementById("shirtSize1");
const shirtSize2Select = document.getElementById("shirtSize2");
const selectedPrice = document.getElementById("selectedPrice");
// Abrir menu mobile
mobileMenuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// Alternar entre abadá individual e casadinha
    individualAbada.addEventListener('change', function() {
        if (this.checked) {
            shirtSizeIndividual.style.display = 'block';
            shirtSizeCasadinha.style.display = 'none';
            selectedPrice.textContent = 'VALOR TOTAL: R$ 60,00';

            // Tornar os campos obrigatórios conforme necessário
            shirtSizeSelect.required = true;
            shirtSize1Select.required = false;
            shirtSize2Select.required = false;
        }
    });

    casadinhaAbada.addEventListener('change', function() {
        if (this.checked) {
            shirtSizeIndividual.style.display = 'none';
            shirtSizeCasadinha.style.display = 'block';
            selectedPrice.textContent = 'VALOR TOTAL: R$ 100,00';

            // Tornar os campos obrigatórios conforme necessário
            shirtSizeSelect.required = false;
            shirtSize1Select.required = true;
            shirtSize2Select.required = true;
        }
    });

// Abrir modal de inscrição
participateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registrationModal.style.display = "flex";
});

heroCtaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registrationModal.style.display = "flex";
});

// Fechar modal
closeModalBtn.addEventListener("click", () => {
  registrationModal.style.display = "none";
});

// Fechar modal ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target === registrationModal) {
    registrationModal.style.display = "none";
  }
});

// Processar formulário
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Coletar dados do formulário
  const fullName = document.getElementById("fullName").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const abadaType = document.querySelector(
    'input[name="abadaType"]:checked'
  ).value;
  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).value;

  let shirtSizeInfo = "";
    let totalPrice = "";

    if (abadaType === "Individual") {
      const shirtSize = document.getElementById("shirtSize").value;
      shirtSizeInfo = `👕 *Tamanho da Camisa:* ${shirtSize}`;
      totalPrice = "R$ 60,00";
    } else {
      const shirtSize1 = document.getElementById("shirtSize1").value;
      const shirtSize2 = document.getElementById("shirtSize2").value;
      shirtSizeInfo = `👕 *Tamanho Camisa 1:* ${shirtSize1}%0A👕 *Tamanho Camisa 2:* ${shirtSize2}`;
      totalPrice = "R$ 100,00";
    }

  // Formatar mensagem para WhatsApp
  const message =
    `✅ NOVA INSCRIÇÃO - BLOCO EQUIPE PÂNTANO ✅%0A%0A` +
    `👤 *Nome:* ${fullName}%0A` +
    `📱 *WhatsApp:* ${whatsapp}%0A` +
    `🎭 *Tipo de Abadá:* ${abadaType}%0A` +
    shirtSizeInfo +
    `%0A` +
    `💰 *Valor Total:* ${totalPrice}%0A` +
    `💳 *Forma de Pagamento:* ${paymentMethod}%0A%0A` +
    `📅 *Data da Inscrição:* ${new Date().toLocaleDateString("pt-BR")}`;

  // Número do WhatsApp para enviar os dados (substitua pelo número real)
  const whatsappNumber = "5584981935013"; // Exemplo: (84) 98193-5013

  // Criar link do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Abrir WhatsApp em nova aba
  window.open(whatsappUrl, "_blank");

  // Mostrar mensagem de sucesso
  formContainer.style.display = "none";
  successMessage.style.display = "block";

  // Resetar formulário após 5 segundos e fechar modal
  setTimeout(() => {
    registrationForm.reset();
    // Resetar para o estado padrão (abadá individual)
    individualAbada.checked = true;
    shirtSizeIndividual.style.display = "block";
    shirtSizeCasadinha.style.display = "none";
    selectedPrice.textContent = "VALOR TOTAL: R$ 60,00";
    formContainer.style.display = "block";
    successMessage.style.display = "none";
    registrationModal.style.display = "none";
  }, 5000);
});

// Suavizar rolagem para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") return;

    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Adicionar efeito de scroll para header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.padding = "10px 0";
  } else {
    header.style.padding = "20px 0";
  }
});
