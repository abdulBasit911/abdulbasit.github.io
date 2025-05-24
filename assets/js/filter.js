document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const allProjects = document.querySelectorAll('.project-card');

  function filterProjects() {
    const filter = this.dataset.filter.toLowerCase();

    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    // Show/hide projects
    allProjects.forEach(card => {
      const category = (card.dataset.category || '').toLowerCase();
      if (filter === 'all' || category.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  buttons.forEach(btn => btn.addEventListener('click', filterProjects));
});