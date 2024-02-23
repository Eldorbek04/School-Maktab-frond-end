
    $(document).ready(function () {
        $(".searchBtn").click(function (e) {
            e.preventDefault();
            $(".mainSearchForm").toggleClass("active");
        });
        // Slider useful Link
        $('.slider').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 4,
            dots: true,
            autoplay: true,
        });

        new WOW().init();

        // Slider btns
        var prevButton = document.querySelector('.slick-prev');
        var nextButton = document.querySelector('.slick-next');

        prevButton.addEventListener('click', function () {
            prevButton.style.backgroundColor = '#2a3fcc'; // Fon rangini qizil qilish
        });

        nextButton.addEventListener('click', function () {
            nextButton.style.backgroundColor = '#2a3fcc'; // Fon rangini qizil qilish
        });

        // Search Bnts open close
        $(".closeBtn").click(function (e) {
            e.preventDefault();
            $(".mainSearchForm").removeClass("active");
        });



        // Js tilt
        $('.js-tilt').tilt({
            scale: 1.2
        })

    });


    const bigMenuBtn = document.querySelector('.bigMenuBtn');
    const overlay = document.querySelector('.overlay');

    bigMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Dropdown Language
    document.addEventListener("DOMContentLoaded", function () {
        const dropdownButton = document.querySelector(".dropdown .borderedBtn");
        const dropdownMenu = document.querySelector(".dropdown-menu-right");
        const dropdownItems = document.querySelectorAll(".dropdown-item");

        // Add click event listener to the dropdown button
        dropdownButton.addEventListener("click", function () {
            // Toggle the dropdown menu
            dropdownMenu.classList.toggle("show");
        });

        // Add click event listeners to the dropdown items
        dropdownItems.forEach(function (item) {
            item.addEventListener("click", function (event) {
                // Prevent the default link behavior
                event.preventDefault();

                // Remove the "active" class from all dropdown items
                dropdownItems.forEach(function (item) {
                    item.classList.remove("active");
                });

                // Add the "active" class to the clicked item
                this.classList.add("active");

                // Get the href attribute of the clicked item
                const href = this.getAttribute("href");

                // Extract the first two characters from the href as the language code
                const languageCode = href.slice(1, 3); // Extract characters at index 1 and 2

                // Update the dropdown button text with the selected language code
                dropdownButton.textContent = languageCode;

                // Close the dropdown menu
                dropdownMenu.classList.remove("show");
            });
        });
    });

