$(function()
{
    let navBar=$(".navigation")
    $(window).scroll(function()
    {
        let scrTop=$(window).scrollTop()
      if(scrTop>500)
      {
        navBar.addClass('menuFixed')
      }
      else{
       navBar.removeClass('menuFixed')
      }
    })
    $(window).ready(function()
    {
        let preloader=$(".preloader")
        preloader.delay(300).fadeOut(1000)
    })
})