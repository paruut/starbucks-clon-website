        const imgSlider = (anything) => {
            document.querySelector('.starbucks').src = anything;
        }

        const changeCirclecolor = (color) => {
            const circle = document.querySelector('.circle');
            circle.style.background = color;
        }

        const toggleMenu = () => {
            let menuToggle = document.querySelector('.toggle');
            let navigation = document.querySelector('.navigation');
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active');
        }