function setupContact(data, lang) {
  const ui = data.ui[lang] || data.ui.es;
  const contact = data.personal.contact || {};
  const emailWrapper = document.querySelector('.contact-icon-wrapper[data-type="email"]');
  const phoneWrapper = document.querySelector('.contact-icon-wrapper[data-type="phone"]');
  const emailValue = document.getElementById('emailValueItem');
  const phoneValue = document.getElementById('phoneValueItem');
  const githubBtn = document.getElementById('githubBtn');
  if (emailWrapper && emailValue) emailWrapper.onclick = () => { emailValue.textContent = emailValue.classList.contains('show') ? '' : contact.email || ''; emailValue.classList.toggle('show'); };
  if (phoneWrapper && phoneValue) phoneWrapper.onclick = () => { phoneValue.textContent = phoneValue.classList.contains('show') ? '' : contact.phone || ''; phoneValue.classList.toggle('show'); };
  if (githubBtn) githubBtn.onclick = () => contact.github && window.open(contact.github, '_blank', 'noopener');

  const form = document.getElementById('contactForm');
  if (!form) return;
  form.onsubmit = async event => {
    event.preventDefault();
    const name = form.nombre.value.trim(), email = form.email.value.trim(), message = form.mensaje.value.trim();
    if (!name || !email || !message) return alert(ui.formRequired);
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return alert(ui.formInvalidEmail);
    const button = form.querySelector('button[type="submit"]'), original = button.innerHTML;
    button.disabled = true; button.textContent = ui.sending;
    try {
      const cfg = data.config?.emailjs;
      if (!cfg?.enabled || !window.emailjs) throw new Error('EmailJS desactivado o no disponible');
      emailjs.init(cfg.publicKey);
      const response = await emailjs.send(cfg.serviceId, cfg.templateId, {to_email: contact.email, from_name: name, from_email: email, message, reply_to: email});
      if (response.status && response.status >= 300) throw new Error(`EmailJS status ${response.status}`);
      alert(ui.formSuccess); form.reset();
    } catch (error) { console.error(error); alert(ui.formError); }
    finally { button.disabled = false; button.innerHTML = original; }
  };
}
window.setupContact = setupContact;
