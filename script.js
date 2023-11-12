   const searchinput = document.querySelector('#SearchInput')
   const ul = document.querySelector('#list');

   const home = document.querySelector('#home');
   const pages = document.querySelector('#pages');
   const blog = document.querySelector('#blog');
   const contact = document.querySelector('#contact');
   const services = document.querySelector('#srv');
   const about = document.querySelector('#about')
   const thisInput = document.querySelector('#thisInput')
   let navbar = false;

   searchinput.addEventListener('click', () => {
       if (!navbar) {
           ul.style.position = 'relative';
           home.style.display = 'none';
           pages.style.display = 'none';
           blog.style.display = 'none';
           contact.style.display = 'none';
           services.style.display = 'none';
           about.style.display = 'none';
           searchinput.style.position = 'fixed';
           searchinput.style.right = '45px';
           searchinput.style.top = '35px'
           thisInput.style.display = 'block'
           thisInput.style.width = '400px'
           thisInput.style.padding = '12px'


           thisInput.style.outline = 'none'
       } else {
           ul.style.display = 'flex';
           home.style.display = 'block';
           pages.style.display = 'block';
           blog.style.display = 'block';
           contact.style.display = 'block';
           services.style.display = 'block';
           about.style.display = 'block';
           searchinput.style.position = 'unset';
           thisInput.style.display = 'none'
       }
       navbar = !navbar
   })

   const btn = document.getElementById('bg')


   btn.addEventListener('click', () => {
       let text = 'clicked'
       btn.textContent = 'Subscribed'
   })