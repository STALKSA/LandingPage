$(document).ready(function() {

    let form = $("#contactForm");
    let modal = $("#myModal");
    let closeBtn = $(".close");
    let emailInput = $("#email");
    let emailError = $("#emailError");
    let successMessage = $("#successMessage");

    // Функция показа модального окна
    function showModal() {
      modal.css("display", "block");
    }

    // Функция закрытия модального окна
    function closeModal() {
      modal.css("display", "none");
    }

    // Функция валидации email
    function validateEmail(email) {
      let re = /^\S+@\S+\.\S+$/;
      return re.test(email);
    }

    // Обработчик события отправки формы
    form.submit(function(event) {
      event.preventDefault();

      // Валидация email
      let email = emailInput.val();
      if (!validateEmail(email)) {
        emailError.text("Некорректный email");
        return;
      } else {
        emailError.text("");
      }

      // Заблокировать поля формы
      form.find("input, textarea").addClass("contact__input-masked");
      form.find("input[type='submit']").prop("disabled", true);

      // Очистить сообщения об ошибках
      emailError.text("");

      // Показать модальное окно
      showModal();

      // Очистить поля формы
      form[0].reset();
    });

    // Обработчик события нажатия кнопки закрытия модального окна
    closeBtn.click(function() {
      // Разблокировать поля формы
      form.find("input, textarea").removeClass("contact__input-masked");
      form.find("input[type='submit']").prop("disabled", false);

      // Очистить сообщения об ошибках
      emailError.text("");

      // Скрыть модальное окно
      closeModal();
    });


    let texts = [
        {
            title: "Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum",
            subtitle: "John Doe, Google Inc."
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Temporibus autem quibusdam et aut officiis debitis aut rerum",
            subtitle: "Jane Smith, ABC Corp."
        },
        {
            title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            subtitle: "Mark Johnson, XYZ Ltd."
        }
    ];
    
    let currentIndex = 0;
    
    function updateText() {
        var currentText = texts[currentIndex];
        $("#text1").text(currentText.title);
        $("#text2").text(currentText.subtitle);
    }
    
    function updateActiveCircle() {
        $(".links_circle").removeClass("links_circle-active");
        $(".links_circle").eq(currentIndex).addClass("links_circle-active");
    }
    
    $(".links_circle").click(function() {
        currentIndex = $(this).index();
        updateText();
        updateActiveCircle();
    });
    
    updateText();
    updateActiveCircle();


  });