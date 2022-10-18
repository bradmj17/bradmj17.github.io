# Responsive Hamburger Menu With Css & Jquery

### Description
Fully responsive hamburger menu on the right side for mobile devices , laptop and desktops also.In this menu using html5 and custom css and using javascript for open and close menu and also mobile responsive sub menu toggle slide.



####Add Jquery cdn in footer

```<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>```

####Here is the html

```<!--  hamburger section-->
<div class="humburger" id="hambuger_menu">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>


<!--main menu body-->
<section class="menu_body" id="menubody">
  <div class="menu_body__item_wrapper">
<!--    menu list-->
    <ul class="menu_list">
      <li><a href="#">Home</a></li>
<!--      have submenu-->
      <li class="has_child"><a href="#">About</a>
        <ul class="sub-menu">
          <li><a href="#">Who We Are</a></li>
          <li><a href="#">Managment</a></li>
        </ul>
      </li>
<!--      have submenu-->
      <li class="has_child"><a href="javascript">Projects</a>
        <ul class="sub-menu">
          <li><a href="#">Ongoing</a></li>
          <li><a href="#">Complete</a></li>
        </ul>
      </li>
      <li><a href="#">Brochure</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Contact Us</a></li>

    </ul>


  </div>
</section>
```

####Here is the Jquery
```    $(".menu_body__item_wrapper li.has_child").each(function (index) {
      $(this).click(function (event) {
        $('.sub-menu').eq(index).slideToggle();
        event.preventDefault();
        event.stopImmediatePropagation();

      });
      $('.sub-menu').click(function (e){
        e.stopPropagation();
        e.stopImmediatePropagation();
      })
    })
```

###Style 
Follow the sass folder 

> Click to See the Demo  [Codepen](https://codepen.io/saif175/pen/ExWGOKz)