<template>
<body>
  <header class="header-top">
      <div class="header_top">
        <div class="container">
          <div class="header_contacts">
            <a class="header_phone" href="tel:380646592314">+38 (064) 659 23 14</a>
            <a class="header_email" href="#">email@gmail.com</a>
            <p class="header-name">AUGUST</p>  
          </div>
        </div>
      </div>
      <div class="header_content">
        <div class="container">
            <nav class="menu">
              <ul>
                <li><router-link to="/login" tag="a">Увійти</router-link></li>
                <li><a href="#">Контакти</a></li>
                <li><a href="#">Меню</a></li>
                <li><a href="#">Про нас</a></li>
              </ul>
            </nav>
          </div>
        </div>
  </header>

    <div class="container">
      <div class="photo">
        <p>P I C T U R E</p>
      </div>
    </div>

    <section class="about">
      <div class="container">
        <div class="about_top">
          <div class="about_title-box">
            <div class="about-title">
              ПОДІЇ
            </div>
            <div class="about-text">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempora velit necessitatibus itaque! Incidunt 
              in explicabo iure maxime mollitia repellat error ex inventore.
            </div>
          </div>
          <div class="about_btn">
          <a href="#">
            Усі події
          </a>
        </div>
        </div>
        <div class="about_items">
          <div id="room" class="about_item">
            <div class="about_item-title">
              Дитяча кімната
            </div>
            <div class="about_item-text">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempora velit necessitatibus.
            </div>
            <div class="about_item-btn">
              <a class="about_item-link" href="#">Більше</a>
            </div>
          </div>

          <div id="banquets" class="about_item">
            <div class="about_item-title">
              Банкети
            </div>
            <div class="about_item-text">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempora velit necessitatibus.
            </div>
            <div class="about_item-btn">
              <a class="about_item-link" href="#">Більше</a>
            </div>
          </div>

          <div id="fun" class="about_item">
            <div class="about_item-title">
              Розваги
            </div>
            <div class="about_item-text">
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Tempora velit necessitatibus.
            </div>
            <div class="about_item-btn">
              <a class="about_item-link" href="#">Більше</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news">
      <div class="container">
      <div class="news_top">
        <div class="news_title-box">
          <div class="news_title">
            Новини
          </div>
          <div class="news_text">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Tempora velit necessitatibus itaque! Incidunt 
            in explicabo iure maxime mollitia repellat error ex inventore.
          </div>
        </div>
        <div class="news_btn">
          <a href="#">
            Усі новини
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="view">
            <div class="news-title">
              Огляд перший
            </div>
            <div class="news-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur 
              amet dolor inventore adipisci quas beatae tempora delectus, ea at quis illo 
              libero eaque quos et sunt ad quidem! Sed!              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur 
              amet dolor inventore adipisci quas beatae tempora delectus, ea at quis illo 
              libero eaque quos et sunt ad quidem! Sed!              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur 
              amet dolor inventore adipisci quas beatae tempora delectus, ea at quis illo 
              libero eaque quos et sunt ad quidem! Sed!
            </div>
            <div class="news-author">
              ПІБ Автора
            </div>
        </div>
    </div>
  </section>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-inner">
        <div class="footer-info">
          <div class="footer-title">
            Ресторан "August"
          </div>
          <div class="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt 
            voluptatibus nulla voluptas, ad repellendus ipsum, labore voluptate delectus 
            quos soluta blanditiis dignissimos sit? Consectetur molestiae incidunt consequuntur 
            maiores quia!
          </div>
          <p class="footer-name">AUGUST</p>
          <ul class="footer-list">
            <li><a class="footer-phone" href="tel:380640252356">+38 (064) 025 23 56</a></li>
            <li><a class="footer-email" href="#">email@gmail.com</a></li>
            <li><a class="footer-address" href="#">Київ, вул. Теодори Пушиної, 19</a></li>
          </ul>
        </div>
        <div class="footer-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1188115125215!2d30.364817199999997!3d50.4575122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc9109be261f%3A0x497b61b352c5af50!2z0YPQuy4g0KTQtdC-0LTQvtGA0Ysg0J_Rg9GI0LjQvdC-0LksIDE5LCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1668634641654!5m2!1sru!2sua" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      </div>
    </div>
    <div class="footer-copy">
      <div class="container">
        <div class="copy-text">
          2022 Template by Author
        </div>
      </div>
    </div>
  </footer>
  </body>
</template>

<script>

export default {
  name: 'Home',

}
</script>
