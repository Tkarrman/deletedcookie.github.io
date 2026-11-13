const reverse = (value) => [...value].reverse().join('');

document.querySelectorAll('.email-reveal').forEach((button) => {
  button.addEventListener('click', () => {
    const address = `${reverse(button.dataset.user)}@${reverse(button.dataset.domain)}`;
    const link = document.createElement('a');
    link.className = 'contact-email';
    link.href = `mailto:${address}?subject=${encodeURIComponent('Project enquiry for Deleted Cookie')}`;
    link.textContent = address;
    button.replaceWith(link);
    link.focus();
  }, { once: true });
});
