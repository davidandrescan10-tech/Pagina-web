   const sysapData = {
            servicios: [
                {
                    icono: "fas fa-paint-brush",
                    titulo: "Diseño Web",
                    lista: [
                        "Diseño UI/UX (interfaz y experiencia de usuario): Creación de interface atractivas y funcionales.",
                        "-Diseño Responsivo: Se adapta a diferentes tamaños de pantalla y dispositivos.",
                        "-Rediseño de sitios existentes: Mejora de la estructura y diseño de sitios web ya existentes."
                    ]
                },
                
                {
                    icono: "fas fa-cogs",
                    titulo: "Servicios Complementarios",
                    lista: [
                        "Hosting y dominio: Proporcionamos servicios de almacenamiento de archivos confiables y registro de dominios personalizados.",
                        "Correos corporativo: Configuración de correos electrónicos profesionales con el dominio de la empresa.",
                        "Integración con APIs (Google Maps, pasarelas de pago, redes sociales): Conectamos tu sitio web con servicios externos para mejorar su funcionalidad."
                    ]
                },
                {
                    icono: "fas fa-code",
                    titulo: "Herramientas de Desarrollo",
                    lista: [
                        "-Front-end (HTML, CSS, JavaScript, etc.): Creación de interfaces de usuario interactivas y atractivas.",
                        "-Back-end (Node.js, PHP, Python): Desarrollo de la lógica del servidor y gestión de bases de datos.",
                        "-Integración con bases de datos (MySQL, PostgreSQL, MongoDB): Conexión y gestión de datos en aplicaciones web."
                       
                    ]
                }
            ],
            beneficios: [
                
                {
                    icono: "fas fa-clock",
                    titulo: "Ahorro de tiempo",
                    descripcion: "Permite a los emprendedores centrarse en su negocio principal mientras nosotros nos encargamos de la presencia en línea."
                },
              
                {
                    icono: "fas fa-plug",
                    titulo: "Integraciones múltiples",
                    descripcion: "Se pueden conectar con pasarelas de pago, redes sociales, formularios, analíticas, y más."
                },
                {
                    icono: "fas fa-shield-alt",
                    titulo: "Seguridad y soporte constante",
                    descripcion: "Mantenimiento regular y actualizaciones para garantizar la seguridad y el buen funcionamiento del sitio web."
                }
            ],
            contactos: [
                {
                    email: "Jeronimoriverasena@gmail.com",
                    WhatsApp: "+573502997084"

                },
                {
                    email: "davidandrescan10@gmail.com",
                    WhatsApp: "+573155391940"
                }
            ]
        };

      
        function cargarServicios() {
            const container = document.querySelector('.services-grid');
            container.innerHTML = '';
            
            sysapData.servicios.forEach(servicio => {
                const servicioCard = document.createElement('div');
                servicioCard.className = 'service-card';
                
                let listaHTML = '';
                servicio.lista.forEach(item => {
                    listaHTML += `<li>${item}</li>`;
                });
                
                servicioCard.innerHTML = `
                    <div class="service-icon"><i class="${servicio.icono}"></i></div>
                    <h3>${servicio.titulo}</h3>
                    <ul>${listaHTML}</ul>
                `;
                
                container.appendChild(servicioCard);
            });
        }

      
        function cargarBeneficios() {
            const container = document.querySelector('.benefits-grid');
            container.innerHTML = '';
            
            sysapData.beneficios.forEach(beneficio => {
                const beneficioCard = document.createElement('div');
                beneficioCard.className = 'benefit-card';
                
                let descripcionHTML = beneficio.descripcion ? `<p>${beneficio.descripcion}</p>` : '';
                
                beneficioCard.innerHTML = `
                    <div class="benefit-icon"><i class="${beneficio.icono}"></i></div>
                    <h3>${beneficio.titulo}</h3>
                    ${descripcionHTML}
                `;
                
                container.appendChild(beneficioCard);
            });
        }

        function cargarContactos() {
            const container = document.querySelector('.contact-info');
            container.innerHTML = '';
            
            sysapData.contactos.forEach(contacto => {
                const contactoItem = document.createElement('div');
                const contactoItems = document.createElement('div');
                contactoItem.className = 'contact-item';
                contactoItems.className = 'contact-items';
                contactoItem.innerHTML = `
                      
                    <i class="fas fa-envelope"></i>
                    <span>${contacto.email}</span>
        
               
                `;

                contactoItems.innerHTML = `
                <i class="fas fa-envelope"></i>
                    <span>${contacto.WhatsApp}</span>
                


                `;
           container.appendChild(contactoItem)
           container.appendChild(contactoItems)
            });
        }
        
        
        /*function cargarContactos2() {
            const container = document.querySelector('.contact-info');
            container.innerHTML = '';
            
            sysapData.contactos.forEach(contacto => {
                const contactoItems = document.createElement('div');
                contactoItems.className = 'contact-items';
                contactoItems.innerHTML = `
                    <i class="fab fa-WhatsApp"></i>
                    <span>${contacto.WhatsApp}</span>
                     
                `;
                
                container.appendChild(contactoItems);
            });
        }*/

        function handleHeaderScroll() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

     
        function animateSections() {
            const sections = document.querySelectorAll('.section');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight - 100) {
                    section.classList.add('visible');
                }
            });
        }

        
        function setupMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const navMenu = document.getElementById('nav-menu');
            
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
            
           
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
        }

   
        function setupSmoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }

       
        function setupLoginModal() {
            const loginBtn = document.getElementById('login-btn');
        //    const registerBtn = document.getElementById('register-btn');
            const loginModal = document.getElementById('login-modal');
            const closeModal = document.getElementById('close-modal');
            const loginForm = document.getElementById('login-form');
            const loginError = document.getElementById('login-error');
            const loginSuccess = document.getElementById('login-success');
            const errorMessage = document.getElementById('error-message');
            const successMessage = document.getElementById('success-message');
            const loginSubmit = document.getElementById('login-submit');
            const authButtons = document.getElementById('auth-buttons');
            const userProfile = document.getElementById('user-profile');
            const userAvatar = document.getElementById('user-avatar');
            const userName = document.getElementById('user-name');
            const userMenuBtn = document.getElementById('user-menu-btn');
            const userDropdown = document.getElementById('user-dropdown');
            const logoutBtn = document.getElementById('logout-btn');
          //  const signupLink = document.getElementById('signup-link');

            // Abrir modal
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                loginModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });

        /*    registerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                loginModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            });*/

           /* signupLink.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Funcionalidad de registro próximamente');
            });*/

            closeModal.addEventListener('click', () => {
                loginModal.classList.remove('show');
                document.body.style.overflow = 'auto';
                resetForm();
            });

       
            loginModal.addEventListener('click', (e) => {
                if (e.target === loginModal) {
                    loginModal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                    resetForm();
                }
            });

     
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const remember = document.getElementById('remember').checked;
                
           
                if (!email || !password) {
                    showError('Por favor, completa todos los campos');
                    return;
                }
          
                loginSubmit.disabled = true;
                loginSubmit.textContent = 'Iniciando sesión...';
                
                setTimeout(() => {
         
                    if (email === 'demo@sysap-code.com' && password === 'demo123') {
                        // Login exitoso
                        showSuccess('¡Inicio de sesión exitoso!');
                        
           
                        const userInitial = email.charAt(0).toUpperCase();
                        userAvatar.textContent = userInitial;
                        userName.textContent = email.split('@')[0];
                        
                        setTimeout(() => {
                            loginModal.classList.remove('show');
                            document.body.style.overflow = 'auto';
                            authButtons.style.display = 'none';
                            userProfile.style.display = 'flex';
                            resetForm();
                        }, 1500);
                    } else {
                   
                        showError('Correo o contraseña incorrectos. Prueba con demo@sysap-code.com / demo123');
                        loginSubmit.disabled = false;
                        loginSubmit.textContent = 'Iniciar Sesión';
                    }
                }, 1500);
            });

    
            userMenuBtn.addEventListener('click', () => {
                userDropdown.classList.toggle('show');
            });

            document.addEventListener('click', (e) => {
                if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                    userDropdown.classList.remove('show');
                }
            });

   
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                authButtons.style.display = 'flex';
                userProfile.style.display = 'none';
                userDropdown.classList.remove('show');
            });

      
            function showError(message) {
                errorMessage.textContent = message;
                loginError.classList.add('show');
                loginSuccess.classList.remove('show');
            }

            function showSuccess(message) {
                successMessage.textContent = message;
                loginSuccess.classList.add('show');
                loginError.classList.remove('show');
            }

            function resetForm() {
                loginForm.reset();
                loginError.classList.remove('show');
                loginSuccess.classList.remove('show');
                loginSubmit.disabled = false;
                loginSubmit.textContent = 'Iniciar Sesión';
            }






        }

        document.addEventListener('DOMContentLoaded', function() {
       
            cargarServicios();
            cargarBeneficios();
            cargarContactos();
            
        
            setupMobileMenu();
            setupSmoothScroll();
            setupLoginModal();
            
       
            window.addEventListener('scroll', () => {
                handleHeaderScroll();
                animateSections();
            });
            
      
            animateSections();
            
            // Inicializar carrusel de fondo
            new CarouselBackground();
        });
//carrusel

class CarouselBackground {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.getElementById('carousel-prev');
        this.nextBtn = document.getElementById('carousel-next');
        this.autoplayInterval = null;
        this.autoplayDelay = 3000; // 3 
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Event listeners para botones
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Event listeners para dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Autoplay
        this.startAutoplay();
        
        // Pausar autoplay al interactuar
        document.querySelector('.carousel-container').addEventListener('mouseenter', () => this.stopAutoplay());
        document.querySelector('.carousel-container').addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    showSlide(index) {
        // Validar índice
        if (index >= this.slides.length) {
            this.currentSlide = 0;
        } else if (index < 0) {
            this.currentSlide = this.slides.length - 1;
        } else {
            this.currentSlide = index;
        }
        
        // Remover clase active de todas las diapositivas y dots
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Añadir clase active a la diapositiva y dot actual
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }
    
    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }
    
    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}
