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
  const shirtSize = document.getElementById("shirtSize").value;
  const paymentMethod = document.querySelector(
    'input[name="payment"]:checked'
  ).value;

  // Formatar mensagem para WhatsApp
  const message =
    `✅ NOVA INSCRIÇÃO - BLOCO EQUIPE PÂNTANO ✅%0A%0A` +
    `👤 *Nome:* ${fullName}%0A` +
    `📱 *WhatsApp:* ${whatsapp}%0A` +
    `👕 *Tamanho da Camisa:* ${shirtSize}%0A` +
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
