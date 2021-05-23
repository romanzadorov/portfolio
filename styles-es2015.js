(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".menu-btn {\n  position: absolute;\n  z-index: 3;\n  right: 35px;\n  top: 35px;\n  cursor: pointer;\n  transition: all 0.5s ease-out;\n}\n.menu-btn .btn-line {\n  width: 28px;\n  height: 3px;\n  margin: 0 0 5px 0;\n  background: #fff;\n  transition: all 0.5s ease-out;\n}\n.menu-btn.close {\n  transform: rotate(180deg);\n}\n.menu-btn.close .btn-line:nth-child(1) {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n.menu-btn.close .btn-line:nth-child(2) {\n  opacity: 0;\n}\n.menu-btn.close .btn-line:nth-child(3) {\n  transform: rotate(-45deg) translate(7px, -6px);\n}\n.menu {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  opacity: 0.9;\n  visibility: hidden;\n}\n.menu.show {\n  visibility: visible;\n}\n.menu-branding,\n.menu-nav {\n  display: flex;\n  flex-flow: column wrap;\n  align-items: center;\n  justify-content: center;\n  float: left;\n  width: 50%;\n  height: 100vh;\n  overflow: hidden;\n}\n.menu-nav {\n  margin: 0;\n  padding: 0;\n  background: #373737;\n  list-style: none;\n  transform: translate3d(0, -100%, 0);\n  transition: all 0.5s ease-out;\n}\n.menu-nav.show {\n  transform: translate3d(0, 0, 0);\n}\n.menu-branding {\n  background: #444;\n  transform: translate3d(0, 100%, 0);\n  transition: all 0.5s ease-out;\n}\n.menu-branding.show {\n  transform: translate3d(0, 0, 0);\n}\n.menu-branding .portrait {\n  width: 250px;\n  height: 250px;\n  background: url('portrait_1_bl_wh_250_250.jpeg');\n  border-radius: 50%;\n  border: solid 3px #eece1a;\n}\n.menu .nav-item {\n  transform: translate3d(600px, 0, 0);\n  transition: all 0.5s ease-out;\n}\n.menu .nav-item.show {\n  transform: translate3d(0, 0, 0);\n}\n.menu .nav-item.current > a {\n  color: #eece1a;\n}\n.menu .nav-link {\n  display: inline-block;\n  position: relative;\n  font-size: 30px;\n  text-transform: uppercase;\n  padding: 1rem 0;\n  font-weight: 300;\n  color: #fff;\n  text-decoration: none;\n  transition: all 0.5s ease-out;\n}\n.menu .nav-link:hover {\n  color: chartreuse;\n  transform: scale(1.25);\n}\n.nav-item:nth-child(1) {\n  transition-delay: 0.1s;\n}\n.nav-item:nth-child(2) {\n  transition-delay: 0.2s;\n}\n.nav-item:nth-child(3) {\n  transition-delay: 0.3s;\n}\n.nav-item:nth-child(4) {\n  transition-delay: 0.4s;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  background: #444;\n  color: #fff;\n  height: 100%;\n  margin: 0;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  line-height: 1.5;\n}\n#bg-img {\n  background: url('code_background_2.jpg');\n  background: rgba(68, 68, 68, 0.9),\n    url('code_background_2.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n}\nh1,\nh2,\nh3 {\n  margin: 0;\n  font-weight: 400;\n}\nh1.lg-heading,\nh2.lg-heading,\nh3.lg-heading {\n  font-size: 6rem;\n}\nh1.sm-heading,\nh2.sm-heading,\nh3.sm-heading {\n  margin-bottom: 2rem;\n  padding: 0.2rem 1rem;\n  background: rgba(73, 73, 73, 0.5);\n  /* width: max-content; */\n}\na {\n  color: #fff;\n  text-decoration: none;\n}\nheader {\n  position: fixed;\n  z-index: 2;\n  width: 100%;\n}\n.text-secondary {\n  color: #eece1a;\n}\nmain {\n  padding: 4rem;\n  min-height: calc(100vh - 60px);\n}\nmain .icons {\n  margin-top: 1rem;\n}\nmain .icons a {\n  padding: 0.4rem;\n}\nmain .icons a:hover {\n  color: #eece1a;\n  transition: all 0.5s ease-out;\n}\nmain#home {\n  overflow: hidden;\n}\nmain#home h1 {\n  margin-top: 20vh;\n}\n.about-info {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-areas: \"bioimage bio bio\" \"job1 job2 job3\";\n  grid-template-columns: repeat(3, 1fr);\n}\n.about-info .bio-image {\n  grid-area: bioimage;\n  margin: auto;\n  border-radius: 50%;\n  border: #eece1a 3px solid;\n}\n.about-info .bio {\n  grid-area: bio;\n  font-size: 1.5rem;\n}\n.about-info .job-1 {\n  grid-area: job1;\n}\n.about-info .job-2 {\n  grid-area: job2;\n}\n.about-info .job-3 {\n  grid-area: job3;\n}\n.about-info .job {\n  background: #515151;\n  padding: 0.5rem;\n  border-bottom: #eece1a 5px solid;\n}\n.projects {\n  display: grid;\n  grid-gap: 0.7rem;\n  grid-template-columns: repeat(3, 1fr);\n}\n.projects img {\n  width: 100%;\n  border: 3px #fff solid;\n}\n.projects img:hover {\n  opacity: 0.5;\n  border-color: #eece1a;\n  transition: all 0.5s ease-out;\n}\n.boxes {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 1rem;\n}\n.boxes div {\n  font-size: 2rem;\n  border: 3px #fff solid;\n  padding: 1.5rem 2.5rem;\n  margin-bottom: 3rem;\n  transition: all 0.5s ease-out;\n}\n.boxes div:hover {\n  padding: 0.5rem 1.5rem;\n  background: #eece1a;\n  color: #000;\n}\n.boxes div:hover span {\n  color: #000;\n}\n.boxes div:hover a {\n  color: #000;\n}\n.btn,\n.btn-dark,\n.btn-light {\n  display: block;\n  padding: 0.5rem 1rem;\n  border: 0;\n  margin-bottom: 0.3rem;\n}\n.btn:hover,\n.btn-dark:hover,\n.btn-light:hover {\n  background: #eece1a;\n  color: #000;\n}\n.btn-dark {\n  background: black;\n  color: #fff;\n}\n.btn-light {\n  background: #c4c4c4;\n  color: #333;\n}\n#main-footer {\n  text-align: center;\n  padding: 1rem;\n  background: #2b2b2b;\n  color: #fff;\n  height: 60px;\n}\n@media screen and (min-width: 1171px) {\n  .projects {\n    grid-template-columns: repeat(4, 1fr);\n  }\n  h1.sm-heading,\n  h2.sm-heading,\n  h3.sm-heading {\n    margin-bottom: 2rem;\n    padding: 0.2rem 1rem;\n    background: rgba(73, 73, 73, 0.5);\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n  }\n}\n@media screen and (min-width: 769px) and (max-width: 1170px) {\n  .projects {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media screen and (max-width: 768px) {\n  main {\n    align-items: center;\n    text-align: center;\n  }\n  main .lg-heading {\n    line-height: 1;\n    margin-bottom: 1rem;\n  }\n  ul.menu-nav,\n  div.menu-branding {\n    float: none;\n    width: 100%;\n    min-height: 0;\n  }\n  ul.menu-nav.show,\n  div.menu-branding.show {\n    transform: translate3d(0, 0, 0);\n  }\n  .menu-nav {\n    height: 75vh;\n    transform: translate3d(-100%, 0, 0);\n    font-size: 24px;\n  }\n  .menu-branding {\n    height: 25vh;\n    transform: translate3d(100%, 0, 0);\n  }\n  .menu-branding .portrait {\n    background: url('portrait_1_bl_wh_250_250.jpg');\n    width: 170px;\n    height: 170px;\n    background-position: center;\n  }\n  .about-info {\n    grid-template-areas: \"bioimage\" \"bio\" \"job1\" \"job2\" \"job3\";\n    grid-template-columns: 1fr;\n  }\n  .projects {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 500px) {\n  main {\n    padding: 2rem;\n    align-items: center;\n    text-align: center;\n  }\n  main #home h1 {\n    margin-top: 10vh;\n  }\n  main .lg-heading {\n    margin-top: 1rem;\n    font-size: 5rem;\n  }\n  .projects {\n    grid-template-columns: 1fr;\n  }\n  .menu-branding {\n    height: 25vh;\n    transform: translate3d(100%, 0, 0);\n  }\n  .menu-branding .portrait {\n    background: url('portrait_1_bl_wh_250_250.jpg');\n    width: 170px;\n    height: 170px;\n    background-position: center;\n  }\n}\n@media screen and (max-width: 280px) {\n  main {\n    padding: 2rem;\n    align-items: center;\n    text-align: center;\n  }\n  main #home h1 {\n    margin-top: 10vh;\n  }\n  main .lg-heading {\n    margin-top: 1rem;\n    font-size: 4rem;\n  }\n  .projects {\n    grid-template-columns: 1fr;\n  }\n  .menu-branding {\n    height: 25vh;\n    transform: translate3d(100%, 0, 0);\n  }\n  .menu-branding .portrait {\n    background: url('portrait_1_bl_wh_250_250.jpg');\n    width: 145px;\n    height: 145px;\n    background-position: center;\n    margin-top: 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,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O0VBQ0E7O0lBRUUsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLCtDQUFpRTtJQUNqRSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsMERBQTBEO0lBQzFELDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsK0NBQWlFO0lBQ2pFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGtDQUFrQztFQUNwQztFQUNBO0lBQ0UsK0NBQWlFO0lBQ2pFLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xuICByaWdodDogMzVweDtcbiAgdG9wOiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuLm1lbnUtYnRuIC5idG4tbGluZSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuLm1lbnUtYnRuLmNsb3NlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5tZW51LWJ0bi5jbG9zZSAuYnRuLWxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSg1cHgsIDVweCk7XG59XG4ubWVudS1idG4uY2xvc2UgLmJ0bi1saW5lOm50aC1jaGlsZCgyKSB7XG4gIG9wYWNpdHk6IDA7XG59XG4ubWVudS1idG4uY2xvc2UgLmJ0bi1saW5lOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDdweCwgLTZweCk7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tZW51LnNob3cge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm1lbnUtYnJhbmRpbmcsXG4ubWVudS1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWVudS1uYXYge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMzNzM3Mzc7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5tZW51LW5hdi5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5tZW51LWJyYW5kaW5nIHtcbiAgYmFja2dyb3VuZDogIzQ0NDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG4ubWVudS1icmFuZGluZy5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5tZW51LWJyYW5kaW5nIC5wb3J0cmFpdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3JjL2Fzc2V0cy9pbWcvcG9ydHJhaXRfMV9ibF93aF8yNTBfMjUwLmpwZWdcIik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAzcHggI2VlY2UxYTtcbn1cbi5tZW51IC5uYXYtaXRlbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNjAwcHgsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5tZW51IC5uYXYtaXRlbS5zaG93IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5tZW51IC5uYXYtaXRlbS5jdXJyZW50ID4gYSB7XG4gIGNvbG9yOiAjZWVjZTFhO1xufVxuLm1lbnUgLm5hdi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbi5tZW51IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiBjaGFydHJldXNlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xufVxuXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cblxuLm5hdi1pdGVtOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5uYXYtaXRlbTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4ubmF2LWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4jYmctaW1nIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uL3NyYy9hc3NldHMvaW1nL2NvZGVfYmFja2dyb3VuZF8yLmpwZyk7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjgsIDY4LCA2OCwgMC45KSxcbiAgICB1cmwoLi4vc3JjL2Fzc2V0cy9pbWcvY29kZV9iYWNrZ3JvdW5kXzIuanBnKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaDEubGctaGVhZGluZyxcbmgyLmxnLWhlYWRpbmcsXG5oMy5sZy1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2cmVtO1xufVxuaDEuc20taGVhZGluZyxcbmgyLnNtLWhlYWRpbmcsXG5oMy5zbS1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoNzMsIDczLCA3MywgMC41KTtcbiAgLyogd2lkdGg6IG1heC1jb250ZW50OyAqL1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICNlZWNlMWE7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiA0cmVtO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG59XG5tYWluIC5pY29ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5tYWluIC5pY29ucyBhIHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxubWFpbiAuaWNvbnMgYTpob3ZlciB7XG4gIGNvbG9yOiAjZWVjZTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbn1cbm1haW4jaG9tZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5tYWluI2hvbWUgaDEge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4uYWJvdXQtaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAzMHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImJpb2ltYWdlIGJpbyBiaW9cIiBcImpvYjEgam9iMiBqb2IzXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG4uYWJvdXQtaW5mbyAuYmlvLWltYWdlIHtcbiAgZ3JpZC1hcmVhOiBiaW9pbWFnZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogI2VlY2UxYSAzcHggc29saWQ7XG59XG4uYWJvdXQtaW5mbyAuYmlvIHtcbiAgZ3JpZC1hcmVhOiBiaW87XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmFib3V0LWluZm8gLmpvYi0xIHtcbiAgZ3JpZC1hcmVhOiBqb2IxO1xufVxuLmFib3V0LWluZm8gLmpvYi0yIHtcbiAgZ3JpZC1hcmVhOiBqb2IyO1xufVxuLmFib3V0LWluZm8gLmpvYi0zIHtcbiAgZ3JpZC1hcmVhOiBqb2IzO1xufVxuLmFib3V0LWluZm8gLmpvYiB7XG4gIGJhY2tncm91bmQ6ICM1MTUxNTE7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogI2VlY2UxYSA1cHggc29saWQ7XG59XG5cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwLjdyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG59XG4ucHJvamVjdHMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogM3B4ICNmZmYgc29saWQ7XG59XG4ucHJvamVjdHMgaW1nOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICBib3JkZXItY29sb3I6ICNlZWNlMWE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xufVxuXG4uYm94ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLmJveGVzIGRpdiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYm9yZGVyOiAzcHggI2ZmZiBzb2xpZDtcbiAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XG59XG4uYm94ZXMgZGl2OmhvdmVyIHtcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogI2VlY2UxYTtcbiAgY29sb3I6ICMwMDA7XG59XG4uYm94ZXMgZGl2OmhvdmVyIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5ib3hlcyBkaXY6aG92ZXIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYnRuLFxuLmJ0bi1kYXJrLFxuLmJ0bi1saWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgYm9yZGVyOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG59XG4uYnRuOmhvdmVyLFxuLmJ0bi1kYXJrOmhvdmVyLFxuLmJ0bi1saWdodDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZWNlMWE7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uYnRuLWRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xuICBjb2xvcjogIzMzMztcbn1cblxuI21haW4tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMmIyYjJiO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTcxcHgpIHtcbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICB9XG4gIGgxLnNtLWhlYWRpbmcsXG4gIGgyLnNtLWhlYWRpbmcsXG4gIGgzLnNtLWhlYWRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSg3MywgNzMsIDczLCAwLjUpO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDExNzBweCkge1xuICAucHJvamVjdHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgbWFpbiB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgbWFpbiAubGctaGVhZGluZyB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICB1bC5tZW51LW5hdixcbiAgZGl2Lm1lbnUtYnJhbmRpbmcge1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gIH1cbiAgdWwubWVudS1uYXYuc2hvdyxcbiAgZGl2Lm1lbnUtYnJhbmRpbmcuc2hvdyB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuICAubWVudS1uYXYge1xuICAgIGhlaWdodDogNzV2aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLm1lbnUtYnJhbmRpbmcge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG4gIC5tZW51LWJyYW5kaW5nIC5wb3J0cmFpdCB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vc3JjL2Fzc2V0cy9pbWcvcG9ydHJhaXRfMV9ibF93aF8yNTBfMjUwLmpwZ1wiKTtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgLmFib3V0LWluZm8ge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmlvaW1hZ2VcIiBcImJpb1wiIFwiam9iMVwiIFwiam9iMlwiIFwiam9iM1wiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5wcm9qZWN0cyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1haW4gI2hvbWUgaDEge1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gIH1cbiAgbWFpbiAubGctaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAubWVudS1icmFuZGluZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgLm1lbnUtYnJhbmRpbmcgLnBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zcmMvYXNzZXRzL2ltZy9wb3J0cmFpdF8xX2JsX3doXzI1MF8yNTAuanBnXCIpO1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIG1haW4gI2hvbWUgaDEge1xuICAgIG1hcmdpbi10b3A6IDEwdmg7XG4gIH1cbiAgbWFpbiAubGctaGVhZGluZyB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgLnByb2plY3RzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuICAubWVudS1icmFuZGluZyB7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbiAgLm1lbnUtYnJhbmRpbmcgLnBvcnRyYWl0IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9zcmMvYXNzZXRzL2ltZy9wb3J0cmFpdF8xX2JsX3doXzI1MF8yNTAuanBnXCIpO1xuICAgIHdpZHRoOiAxNDVweDtcbiAgICBoZWlnaHQ6IDE0NXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roman.zadorov/Desktop/Desktop/Angular/sample_projects/portfolio/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map