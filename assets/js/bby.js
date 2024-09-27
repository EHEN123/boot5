
  const mynavi = document.querySelector("#toggle ul");
  
  // if (!mynavi) {
  //   console.error("#toggle ul not found");
  //   return;
  // }

  let mytag = '';

  for (let x in navdata) {
    mytag += `
      <li 
        data-filter="${navdata[x].dataFilter}"
        class="${navdata[x].className}">
        ${navdata[x].d1text}
      </li>
    `;
  }

  mynavi.innerHTML = mytag;



  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });


    // ***nav 필터링 효과***

    
  isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {


    filters.addEventListener('click', function() {
      isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
    }, false);
  });

    });



    
    

    
    


