function showAll() {
    document.getElementById('intro').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';

    content.innerHTML = ` 
      <header>
        <div class="logo">Seann</div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main class="header-main">
        <section class="hero">
            <div class="hero-content" id="home">
                <h1>I'm Seann</h1>
                <p>Web & Game Developer</p>
                <button>Contact Me</button>
            </div>
            </div>
            <div class="image-home">
            <img src="home-pic.jpg">
            </div>
        </section>
        <!---about--->
        <section id="about" class="about">
            <div class="container">
                <h1>About Me</h1>
                </div>
                <div class="container-about">
                <p> I'm Seann William M. Fuerte, a 21-year-old web and game developer currently in my third year of studying Information Technology, major in Software Development. I have a passion for both coding and creating interactive experiences, whether it's through building websites or developing games.

As a web developer, I had the opportunity to work on a project that will possibly benefit Marinduque State College's Learning Resource Center, where I designed and developed a dynamic website using HTML, CSS, PHP, and XML. It is a website where a user will pick and reserve books according to their book category preference. It was a great hands-on experience that sharpened my skills in web design and development.

On the game development side, I’ve also worked on a 2D game called Seasons of Valor using Unity. It’s a simple game where I applied my understanding of computer graphics and game mechanics to bring a fun concept to life. Through this project, I gained valuable insights into creating engaging user experiences while also improving my coding and design abilities.

I’m always looking for new challenges to expand my knowledge and skills, and I’m excited about the possibilities in both the web and game development worlds. Whether it’s creating functional websites or immersive games, I’m driven by the joy of turning ideas into reality.</p>
                <button class="btn-view">View Work</button>
                <button class="btn-cv">Learn More</button>
            </div>
        </section>

        <!-----Skills--->
        <div class="container-skills">
        <h1> SKILLS</h1>
        </div>
        <div class="container-skill" id="skills">
        <div class="skill">
            <img src="images/Html.png" alt="HTML5 Logo">
            <h3>HTML</h3>
            <p>I have a basic understanding of HTML and how to use it to create the structure of web pages. I can write clean, well-organized code to build simple websites and layouts. I’ve worked with HTML to create user interfaces for small projects like booking systems and personal websites.</p>
        </div>
        <div class="skill">
            <img src="images/Css.png" alt="CSS3 Logo">
            <h3>CSS</h3>
            <p>My skills in CSS are at a basic level. I use it to style web pages and make them visually appealing. I know how to apply CSS for layouts, colors, fonts, and basic responsive designs.</p>
        </div>
        <div class="skill">
            <img src="images/Js.png" alt="JavaScript Logo">
            <h3>JavaScript</h3>
            <p>I understand the basics of JavaScript and how to use it to add interactivity to websites. I’ve used JavaScript for small projects, like creating dynamic book descriptions and interactive features for booking systems.</p>
        </div>
        <div class="skill">
            <img src="images/php.png" alt="PHP Logo">
            <h3>PHP</h3>
            <p>My PHP skills are basic, but I’ve used it to create functional back-end systems for projects like booking applications. I can write code for essential features such as login, signup, and data management. I’ve also used PHP to work with XML for storing and retrieving user information.</p>
        </div>
        <div class="skill">
            <img src="images/Java.png" alt="Java Logo">
            <h3>Java</h3>
            <p>I have basic knowledge of Java and its core concepts, such as object-oriented programming, loops, and conditionals. I’ve used Java for small programs and assignments, and I’m familiar with how to write simple algorithms and manage data.</p>
        </div>
    </div>

    <!---Project--->
    <div class="project" id="project">
    <h1> PROJECT</h1>
    </div>
   <div class="slider-wrapper">
    <div class="slider-container">
        <div class="slider-content">
            <img src="images/websitehome.png" class="slider-item">
            <img src="images/website0.png" class="slider-item">
            <img src="images/website1.png" class="slider-item">
        </div>
        <div class="slider-dots">
            <span class="dot" onclick="moveSlide(0)"></span>
            <span class="dot" onclick="moveSlide(1)"></span>
            <span class="dot" onclick="moveSlide(2)"></span>
        </div>
    </div>

    <div class="slider-container2">
        <div class="slider-content2">
            <img src="images/gameHome.jpg" class="slider-item2">
            <img src="images/game0.jpg" class="slider-item2">
            <img src="images/game1.jpg" class="slider-item2">
        </div>
        <div class="slider-dots2">
            <span class="dot2" onclick="moveSlide(0)"></span>
            <span class="dot2" onclick="moveSlide(1)"></span>
            <span class="dot2" onclick="moveSlide(2)"></span>
        </div>
    </div>
</div>
</section>
    <section class="contact-form" id="contact">
      <h2>Contact Me</h2>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Type your name" required>
          <input type="email" placeholder="Type your email" required>
        </div>
        <div class="form-group">
          <input type="text" placeholder="Type your phone number" required>
        </div>
        <textarea placeholder="Type your message here" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
</main>
    <footer class="footer">
    <div class="footer">
        <p> &copy Seann William M. Fuerte</p>
    </div>
    <div class="social">
            <a href="https://telegram.com" target="_blank">
                    <i class="bx bxl-telegram"></i>
            </a>
             <a href="https://linkedin.com" target="_blank">
                <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://facebook.com" target="_blank">
                 <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                </div>
    </footer>
    `;

    document.body.appendChild(content);
    document.body.style.backgroundColor = '#2c2c2c';
    document.querySelector('.hero button').style.backgroundColor = '#f1c40f';
}

let currentSlide = [0, 0]; 

function moveSlide(index, sliderIndex) {

    const sliderContent = document.querySelectorAll('.slider-content, .slider-content2')[sliderIndex];
    const totalSlides = document.querySelectorAll(`.slider-item${sliderIndex === 0 ? '' : '2'}`).length;
    const dots = document.querySelectorAll(`.dot${sliderIndex === 0 ? '' : '2'}`);


    if (index >= totalSlides) {
        currentSlide[sliderIndex] = 0;
    } else if (index < 0) {
        currentSlide[sliderIndex] = totalSlides - 1;
    } else {
        currentSlide[sliderIndex] = index;
    }

    sliderContent.style.transform = `translateX(-${currentSlide[sliderIndex] * 100}%)`;


    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide[sliderIndex]) {
            dot.classList.add('active');
        }
    });
}

setInterval(() => {
    moveSlide(currentSlide[0] + 1, 0);
    moveSlide(currentSlide[1] + 1, 1); 
}, 3000);


moveSlide(0, 0);
moveSlide(0, 1); 

