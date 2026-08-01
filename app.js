// App logic for premium clothing store website

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Hero Slider
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-btn.prev');
  const nextBtn = document.querySelector('.hero-btn.next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetSlideTimer();
    });
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetSlideTimer();
    });
  }

  function startSlideTimer() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function resetSlideTimer() {
    clearInterval(slideInterval);
    startSlideTimer();
  }

  startSlideTimer();

  // 3. Render Products & Filtering System
  const productsContainer = document.getElementById('products-grid');
  const resultsCountElement = document.getElementById('results-count');
  
  // State for filtering
  let activeCategory = 'All';
  let searchQuery = '';
  let activeSizes = [];
  let activeColors = [];
  let maxPrice = 500;
  let activeBrands = [];
  let currentSort = 'newest';

  // Initialize filters
  const categoryFilters = document.querySelectorAll('[data-category]');
  const sizePills = document.querySelectorAll('.pill-btn[data-size]');
  const colorDots = document.querySelectorAll('.color-dot[data-color]');
  const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
  const priceRangeInput = document.getElementById('price-range');
  const priceValueDisplay = document.getElementById('price-value');
  const sortSelect = document.getElementById('sort-select');
  const searchInput = document.getElementById('search-products');

  function renderProducts() {
    if (!productsContainer) return;
    
    // Filter logic
    let filtered = products.filter(product => {
      // Category Filter
      const matchCategory = activeCategory === 'All' || product.categories.includes(activeCategory);
      
      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchSearch = query === '' || 
        product.name.toLowerCase().includes(query) || 
        product.brand.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      // Sizes Filter
      const matchSizes = activeSizes.length === 0 || product.sizes.some(size => activeSizes.includes(size));

      // Colors Filter
      const matchColors = activeColors.length === 0 || product.colors.some(color => activeColors.includes(color));

      // Price Filter
      const matchPrice = product.price <= maxPrice;

      // Brand Filter
      const matchBrands = activeBrands.length === 0 || activeBrands.includes(product.brand);

      return matchCategory && matchSearch && matchSizes && matchColors && matchPrice && matchBrands;
    });

    // Sorting logic
    if (currentSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'popularity') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else { // default or newest
      filtered.sort((a, b) => b.id - a.id);
    }

    // Update count display
    if (resultsCountElement) {
      resultsCountElement.textContent = `Showing ${filtered.length} products`;
    }

    // Render cards
    if (filtered.length === 0) {
      productsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0;">
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 1rem;">No items found</h3>
          <p style="color: var(--color-text-secondary);">Try adjusting your filter options or search terms.</p>
        </div>
      `;
      return;
    }

    productsContainer.innerHTML = filtered.map(product => {
      const mainImg = product.images[0];
      const hoverImg = product.images[1] || product.images[0];
      return `
        <div class="product-card" data-id="${product.id}">
          <div class="product-img-wrapper">
            <img class="product-img-main" src="${mainImg}" alt="${product.name}" loading="lazy">
            <img class="product-img-hover" src="${hoverImg}" alt="${product.name}" loading="lazy">
            ${product.rating >= 4.9 ? `<span class="product-badge">Top Rated</span>` : ''}
          </div>
          <div class="product-info">
            <span class="product-brand">${product.brand}</span>
            <h3 class="product-name" onclick="openProductModal(${product.id})">${product.name}</h3>
            <p class="product-desc-short">${product.description}</p>
            <div class="product-footer">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              <button class="view-details-btn" onclick="openProductModal(${product.id})">Details</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Set up event listeners for filters
  if (categoryFilters) {
    categoryFilters.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        activeCategory = el.getAttribute('data-category');
        
        // Update active class on elements
        categoryFilters.forEach(item => item.classList.remove('active'));
        el.classList.add('active');

        // Scroll to products grid smoothly
        const shopSection = document.getElementById('shop-section');
        if (shopSection) {
          shopSection.scrollIntoView({ behavior: 'smooth' });
        }

        renderProducts();
      });
    });
  }

  if (sizePills) {
    sizePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const size = pill.getAttribute('data-size');
        if (activeSizes.includes(size)) {
          activeSizes = activeSizes.filter(s => s !== size);
          pill.classList.remove('active');
        } else {
          activeSizes.push(size);
          pill.classList.add('active');
        }
        renderProducts();
      });
    });
  }

  if (colorDots) {
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const color = dot.getAttribute('data-color');
        if (activeColors.includes(color)) {
          activeColors = activeColors.filter(c => c !== color);
          dot.classList.remove('active');
        } else {
          activeColors.push(color);
          dot.classList.add('active');
        }
        renderProducts();
      });
    });
  }

  if (brandCheckboxes) {
    brandCheckboxes.forEach(box => {
      box.addEventListener('change', () => {
        const brand = box.value;
        if (box.checked) {
          activeBrands.push(brand);
        } else {
          activeBrands = activeBrands.filter(b => b !== brand);
        }
        renderProducts();
      });
    });
  }

  if (priceRangeInput) {
    priceRangeInput.addEventListener('input', (e) => {
      maxPrice = parseFloat(e.target.value);
      if (priceValueDisplay) {
        priceValueDisplay.textContent = `$${maxPrice}`;
      }
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Initial products render
  renderProducts();

  // 4. Testimonials Slider
  const reviewSlides = document.querySelectorAll('.review-slide');
  const reviewDots = document.querySelectorAll('.review-dot');
  let currentReview = 0;

  function showReview(index) {
    reviewSlides.forEach(slide => slide.classList.remove('active'));
    reviewDots.forEach(dot => dot.classList.remove('active'));
    
    currentReview = (index + reviewSlides.length) % reviewSlides.length;
    reviewSlides[currentReview].classList.add('active');
    if (reviewDots[currentReview]) {
      reviewDots[currentReview].classList.add('active');
    }
  }

  if (reviewDots) {
    reviewDots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showReview(idx);
      });
    });
  }
  
  // Auto-rotate reviews
  setInterval(() => {
    showReview(currentReview + 1);
  }, 5000);

  // 5. Accordion FAQs
  const faqHeaders = document.querySelectorAll('.faq-header');
  if (faqHeaders) {
    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = item.querySelector('.faq-content');
        
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          content.style.maxHeight = '0px';
        } else {
          // Close other open faq items
          document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            const otherContent = otherItem.querySelector('.faq-content');
            if (otherContent) otherContent.style.maxHeight = '0px';
          });

          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // 6. Contact Form submission logic
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you shortly.');
      contactForm.reset();
    });
  }
});

// 7. Modal Functionality (Global)
window.openProductModal = function(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modalOverlay = document.getElementById('modal-overlay');
  const modalContainer = document.getElementById('modal-container');

  // Related products logic (up to 3 items)
  const related = products
    .filter(p => p.id !== product.id && p.categories.some(cat => product.categories.includes(cat)))
    .slice(0, 3);

  const relatedHtml = related.map(rel => `
    <div style="cursor:pointer; display:flex; gap:1rem; align-items:center; margin-bottom:1rem;" onclick="openProductModal(${rel.id})">
      <img src="${rel.images[0]}" alt="${rel.name}" style="width:50px; height:50px; border-radius:4px; object-fit:cover;">
      <div>
        <h5 style="font-size:0.85rem; font-weight:600; margin:0;">${rel.name}</h5>
        <span style="font-size:0.8rem; color:var(--color-accent); font-weight:600;">$${rel.price.toFixed(2)}</span>
      </div>
    </div>
  `).join('');

  modalContainer.innerHTML = `
    <span class="modal-close-btn" onclick="closeProductModal()">&times;</span>
    <div class="modal-images">
      <img id="modal-active-img" class="modal-main-img" src="${product.images[0]}" alt="${product.name}">
      <div class="modal-thumbs">
        ${product.images.map((img, index) => `
          <img class="modal-thumb ${index === 0 ? 'active' : ''}" src="${img}" alt="${product.name} thumb ${index}" onclick="switchModalImage(this, '${img}')">
        `).join('')}
      </div>
    </div>
    <div class="modal-details">
      <span class="modal-brand">${product.brand}</span>
      <h2 class="modal-title">${product.name}</h2>
      <div class="modal-price">$${product.price.toFixed(2)}</div>
      <p class="modal-desc">${product.description}</p>
      
      <div class="modal-spec-group">
        <h4 class="modal-spec-title">Sizes</h4>
        <div class="pills-container">
          ${product.sizes.map(size => `<button class="pill-btn">${size}</button>`).join('')}
        </div>
      </div>

      <div class="modal-spec-group">
        <h4 class="modal-spec-title">Colors</h4>
        <div style="display:flex; gap:0.5rem;">
          ${product.colors.map(color => `
            <span style="font-size:0.85rem; padding:0.25rem 0.75rem; border:1px solid var(--color-border); border-radius:4px; background-color:var(--color-bg-secondary);">${color}</span>
          `).join('')}
        </div>
      </div>

      <div class="modal-spec-group" style="font-size:0.9rem; color:var(--color-text-secondary);">
        <p><strong>Material:</strong> ${product.material}</p>
        <p style="margin-top:0.25rem;"><strong>Availability:</strong> ${product.inStock ? 'In Stock (Ships in 24 hours)' : 'Out of Stock'}</p>
      </div>

      <div class="modal-spec-group" style="margin-top:1.5rem;">
        <h4 class="modal-spec-title">Related Items</h4>
        ${relatedHtml || '<p style="font-size:0.85rem; color:var(--color-text-secondary);">No related items found.</p>'}
      </div>

      <a href="https://wa.me/1234567890?text=I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}" target="_blank" class="whatsapp-order-btn">
        <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.579 1.968 14.12 .943 11.5 1.46c-.538-.002-1.066.079-1.57.24-5.438 0-9.862 4.372-9.866 9.802-.001 1.764.475 3.483 1.38 5.018l-1.023 3.733 3.832-.999zM17.65 15.03c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.02-.51-1.75-.92-2.45-1.52-.53-.45-.98-.98-1.34-1.6-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.25-.6-.53-.52-.68-.53-.15-.01-.33-.01-.51-.01-.18 0-.48.07-.73.33-.25.27-.95.93-.95 2.27s.98 2.62 1.11 2.8c.14.18 1.93 2.94 4.67 4.12.65.28 1.16.45 1.56.57.65.2 1.25.17 1.72.1.53-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.58-.35z"/>
        </svg>
        Order via WhatsApp
      </a>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.classList.add('modal-open');
}

window.closeProductModal = function() {
  const modalOverlay = document.getElementById('modal-overlay');
  modalOverlay.classList.remove('active');
  document.body.classList.remove('modal-open');
}

window.switchModalImage = function(thumbElement, imageUrl) {
  // Update active status on thumbnails
  const thumbs = document.querySelectorAll('.modal-thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  thumbElement.classList.add('active');

  // Update active image
  const activeImg = document.getElementById('modal-active-img');
  if (activeImg) {
    activeImg.src = imageUrl;
  }
}
