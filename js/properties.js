// Sample property data
const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: '$1,200,000',
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    price: '$450,000',
    location: 'Manhattan, NY',
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Beachfront Condo',
    price: '$850,000',
    location: 'Miami, FL',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Mountain View Estate',
    price: '$2,500,000',
    location: 'Aspen, CO',
    beds: 6,
    baths: 5,
    sqft: 5500,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Urban Loft',
    price: '$625,000',
    location: 'Chicago, IL',
    beds: 1,
    baths: 2,
    sqft: 1500,
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Lakefront Property',
    price: '$975,000',
    location: 'Seattle, WA',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Historic Brownstone',
    price: '$1,850,000',
    location: 'Boston, MA',
    beds: 5,
    baths: 4,
    sqft: 4200,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    title: 'Desert Oasis Villa',
    price: '$890,000',
    location: 'Phoenix, AZ',
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    title: 'Eco-Friendly Smart Home',
    price: '$1,395,000',
    location: 'Portland, OR',
    beds: 4,
    baths: 3,
    sqft: 2900,
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=600&q=80'
  }
];

// Render property cards
function renderProperties() {
  const propertyGrid = document.getElementById('propertyGrid');
  
  properties.forEach(property => {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    propertyCard.innerHTML = `
      <div class="property-image" style="background-image: url('${property.image}')"></div>
      <div class="property-info">
        <h3>${property.title}</h3>
        <p>${property.location}</p>
        <div class="property-price">${property.price}</div>
        <div class="property-details">
          <span><i class="fas fa-bed"></i> ${property.beds} beds</span>
          <span><i class="fas fa-bath"></i> ${property.baths} baths</span>
          <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span>
        </div>
      </div>
    `;
    propertyGrid.appendChild(propertyCard);
  });
}

// Initialize properties
document.addEventListener('DOMContentLoaded', renderProperties);