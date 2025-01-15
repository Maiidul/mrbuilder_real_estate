const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Villa Interior'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Kitchen'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80',
    title: 'Master Bedroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Bathroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    title: 'Living Room'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    title: 'Home Office'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    title: 'Rooftop Garden'
  },
  {
    url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80',
    title: 'Swimming Pool'
  }
];

let currentImageIndex = 0;

function renderGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  
  galleryImages.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
      <img src="${image.url}" alt="${image.title}">
      <div class="gallery-overlay">
        <h3>${image.title}</h3>
      </div>
    `;
    galleryItem.addEventListener('click', () => openModal(index));
    galleryGrid.appendChild(galleryItem);
  });
}

function openModal(index) {
  currentImageIndex = index;
  const modal = document.querySelector('.modal');
  updateModalImage();
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('active');
}

function updateModalImage() {
  const modalImage = document.querySelector('.modal-content img');
  modalImage.src = galleryImages[currentImageIndex].url;
  modalImage.alt = galleryImages[currentImageIndex].title;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateModalImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateModalImage();
}

document.addEventListener('DOMContentLoaded', renderGallery);

// Close modal when clicking outside the image
document.querySelector('.modal').addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!document.querySelector('.modal.active')) return;
  
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
});