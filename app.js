const body = document.querySelector('.hamburger-close')
const showMenu = document.querySelector('.hamburger-logo')
const closeMenu = document.querySelector('.hamburger-close-logo')
showMenu.addEventListener('click',function(){
  body.className='hamburger-close hamburger-open'
  document.querySelector('.list').innerHTML= `<ul>
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Workshops</a></li>
                                                <li><a href="#">Services</a></li>
                                                <li><a href="#">Affiliates</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                              </ul>`
})

closeMenu.addEventListener('click',function(){
  body.className='hamburger-close'
  // body.className='hamburger-close'
})
