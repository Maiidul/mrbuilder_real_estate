document.addEventListener('DOMContentLoaded', () => {
  // Counter animation for stats
  const stats = document.querySelectorAll('.stat h3');
  const statsSection = document.querySelector('.stats');
  
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + '+';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach((stat) => {
          const finalValue = parseInt(stat.textContent);
          animateValue(stat, 0, finalValue, 2000);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);

  // Team members interaction
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.addEventListener('click', () => {
      const details = member.querySelector('.member-details');
      details.style.display = details.style.display === 'none' ? 'block' : 'none';
    });
  });

  // Achievement cards interaction
  const achievementCards = document.querySelectorAll('.achievement-card');
  achievementCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = '#f0f0f0';
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = 'white';
    });
  });
});