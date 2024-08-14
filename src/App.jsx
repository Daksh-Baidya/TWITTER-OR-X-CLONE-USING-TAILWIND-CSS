import './App.css'

function App() {
  return (
    <div className='main flex bg-black w-full h-full select-none'>
      <div className="main-1 w-80 h-screen border border-t-0 border-b-0 border-l-0 border-[#2F3336] sticky top-0">
        <div className="main-1-mainbox flex-1 w-full h-auto">
          <div className="main-logo w-7 h-7 xl:mx-14 xl:my-3 mx-auto my-3">
            <span className='invert'><svg className='w-7 h-7 mx-14 my-3' viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></span>
          </div>
          <div className="sidebar text-white pl-14 list-none">
            <ul>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                home
              </span><p className='hidden xl:block'>Home</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                search
              </span><p className='hidden xl:block'>Explore</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5">
                notifications
              </span><p className='hidden xl:block'>Notifications</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                mail
              </span><p className='hidden xl:block'>Messages</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                open_in_new
              </span><p className='hidden xl:block'>Grok</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                communities
              </span><p className='hidden xl:block'>Communities</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                person
              </span><p className='hidden xl:block'>Profile</p></li>
              <li className='my-5 text-2xl active:font-bold cursor-pointer select-none flex items-center justify-center xl:justify-start'><span class="material-symbols-outlined mr-5 text-2xl flex-shrink-0">
                more
              </span><p className='hidden xl:block'>More</p></li>
            </ul>
            <div className="button flex justify-center w-full h-auto"><button className='xl:px-24 xl:py-4 px-4 py-4 bg-[#1D98F0] font-bold rounded-full flex justify-center items-center mx-5'><span class="material-symbols-outlined xl:hidden">
              history_edu
            </span><p className='hidden xl:block'>Post</p></button></div>
          </div>
        </div>
      </div>
      <div className="main-2 w-[595px] border border-t-0 border-[#2F3336] h-full text-white">
        <div className="top-box flex border border-t-0 border-l-0 border-r-0 border-[#2F3336] justify-around p-4 cursor-pointer sticky top-0 bg-black opacity-90">
          <div className="top-box1">
            <span className='border-4 border-t-0 border-l-0 border-r-0 py-4 rounded border-[#1D9BF0] font-bold'>For you</span>
          </div>
          <div className="top-box2">
            <span className='text-[#818283]'>Following</span>
          </div>
        </div>
        <div className="top-2-box border border-[#2F3336] border-l-0 border-r-0 border-t-0 hidden sm:block">
          <div className="top-2-box1">
            <div className="top-2-box1-1 p-4 pl-14">
              <span className='text-2xl text-[#818283]'>What is Happening?!</span>
            </div>
            <div className="top-2-box1-2 flex justify-between p-2">
              <div className="top-2-box1-2-icons w-56 mx-11 flex justify-between items-center cursor-pointer">
                <span class="material-symbols-outlined text-[#1D98F0]">
                  imagesmode
                </span>
                <span class="material-symbols-outlined text-[#1D98F0]">
                  gif_box
                </span>
                <span class="material-symbols-outlined text-[#1D98F0]">
                  ballot
                </span>
                <span class="material-symbols-outlined text-[#1D98F0]">
                  mood
                </span>
                <span class="material-symbols-outlined text-[#1D98F0]">
                  pending_actions
                </span>
                <span class="material-symbols-outlined text-[#1D98F0]">
                  location_on
                </span>
              </div>
              <div className="button"><button className='bg-[#1D98F0] px-5 py-[6px] rounded-3xl font-bold'>Post</button></div>
            </div>
          </div>
          <div className="top-2-box2 border border-[#2F3336] border-l-0 border-r-0 border-b-0 p-3 flex justify-center cursor-pointer">
            <span className='text-[#1D98F0]'>Show 455 posts</span>
          </div>
        </div>
        <div className="post border border-[#2F3336] border-l-0 border-r-0 border-t-0 w-[595px] h-auto">
          <div className="posts w-[570px] mx-auto h-auto flex">
            <div className="profile-pic-part w-11 h-full flex justify-center">
              <div className="pic w-10 h-10 rounded-3xl bg-[url('/Assests/images/profile.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer"></div>
            </div>
            <div className="post-contents w-full h-auto px-1">
              <div className="post-title w-full h-auto flex justify-between">
                <div className="title-left flex justify-center items-center">
                  <span className='font-bold'>Daksh Baidya</span>
                  <span className="verified-mark"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg></span>
                  <span className="username text-[#818283]">@daksh_baidya</span>
                  <span className="space mx-1 text-[#818283]">·</span>
                  <span className="upload-time text-[#818283]">19hr</span>
                </div>
                <div className="title-right">
                  <span className="more-options">···</span>
                </div>
              </div>
              <div className="post-content w-full h-auto flex flex-col justify-center items-start">
                <span className='msg-content'>Lorem ipsum, dolor sit amet consectetur</span>
                <div className="media-content w-full h-[500px]">
                  <div className="media w-full h-[500px] bg-[url('/Assests/images/media.jpg')] bg-cover bg-no-repeat cursor-pointer"></div>
                </div>
              </div>
              <div className="post-interactions flex w-full py-3 justify-between items-center">
                <div className="comment flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="repost flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="like flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="view flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M280-280h80v-400h-80v400Zm320-80h80v-320h-80v320ZM440-480h80v-200h-80v200ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="other-interactions flex justify-between items-center w-14">
                  <div className="bookmark cursor-pointer flex justify-center items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg></span>
                  </div>
                  <div className="share cursor-pointer flex justify-center items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post border border-[#2F3336] border-l-0 border-r-0 border-t-0 w-[595px] h-auto">
          <div className="posts w-[570px] mx-auto h-auto flex">
            <div className="profile-pic-part w-11 h-full flex justify-center">
              <div className="pic w-10 h-10 rounded-3xl bg-[url('/Assests/images/profile.jpg')] bg-cover bg-center bg-no-repeat cursor-pointer"></div>
            </div>
            <div className="post-contents w-full h-auto px-1">
              <div className="post-title w-full h-auto flex justify-between">
                <div className="title-left flex justify-center items-center">
                  <span className='font-bold'>Daksh Baidya</span>
                  <span className="verified-mark"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg></span>
                  <span className="username text-[#818283]">@daksh_baidya</span>
                  <span className="space mx-1 text-[#818283]">·</span>
                  <span className="upload-time text-[#818283]">19hr</span>
                </div>
                <div className="title-right">
                  <span className="more-options">···</span>
                </div>
              </div>
              <div className="post-content w-full h-auto flex flex-col justify-center items-start">
                <span className='msg-content'>Lorem ipsum, dolor sit amet consectetur</span>
                <div className="media-content w-full h-[500px]">
                  <div className="media w-full h-[500px] bg-[url('/Assests/images/media.jpg')] bg-cover bg-no-repeat cursor-pointer"></div>
                </div>
              </div>
              <div className="post-interactions flex w-full py-3 justify-between items-center">
                <div className="comment flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="repost flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="like flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="view flex justify-center items-center text-sm cursor-pointer">
                  <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M280-280h80v-400h-80v400Zm320-80h80v-320h-80v320ZM440-480h80v-200h-80v200ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg></span>
                  <span className="count">3.6K</span>
                </div>
                <div className="other-interactions flex justify-between items-center w-14">
                  <div className="bookmark cursor-pointer flex justify-center items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M200-120v-640q0-33 23.5-56.5T280-840h240v80H280v518l200-86 200 86v-278h80v400L480-240 200-120Zm80-640h240-240Zm400 160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" /></svg></span>
                  </div>
                  <div className="share cursor-pointer flex justify-center items-center">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#e8eaed"><path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" /></svg></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-3 hidden lg:block flex-1 h-full text-white mx-5">
        <div className="main-3-mainbox w-full h-auto sticky top-4">
          <div className="main-3-mainbox-1 w-full h-auto flex justify-center items-center py-1 sticky top-0 bg-black">
            <div className="search-logo bg-[#202327] w-11 h-11 flex justify-center items-center rounded-l-3xl">
              <span><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></span>
            </div>
            <input className='bg-[#202327] w-[310px] h-11 rounded-r-3xl border-none focus:outline-none focus:shadow-none' type="search" name="Search" id="" placeholder='Search' />
          </div>
          <div className="main-3-mainbox-2 w-full h-auto flex justify-center items-center">
            <div className="sub-premium-box w-[350px] h-auto border px-4 py-2 my-6 rounded-xl border-[#2F3336]">
              <div className="sub-premium-box-top-text">
                <span className='font-extrabold text-xl'>Subscribe to Premium</span>
              </div>
              <div className="sub-premium-box-middle-text my-2">
                <span>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
              </div>
              <div className="sub-premium-box-bottom-text">
                <div className="sub-premium-box-bottom-text-button bg-[#1D98F0] w-28 h-9 flex justify-center items-center rounded-full cursor-pointer my-2"><button>Subscribe</button></div>
              </div>
            </div>
          </div>
          <div className="main-3-mainbox-3 w-full h-auto flex justify-center items-center">
            <div className="mainbox-3-parent-box w-[350px] h-auto border border-[#2F3336] rounded-xl">
              <div className="mainbox-3-box1 w-full h-auto px-4 py-2">
                <span className='text-2xl font-semibold'>What’s happening</span>
              </div>
              <div className="mainbox-3-box2 w-full h-auto px-4 py-2 cursor-pointer">
                <div className="mainbox-3-box2-contents w-full h-auto flex justify-start items-start">
                  <div className="mainbox-3-box2-image w-20 h-20 rounded-xl">
                    <div className="bg-world-cup bg-cover bg-center bg-no-repeat w-20  h-20 rounded-xl"></div>
                  </div>
                  <div className="mainbox-3-box2-text mx-2">
                    <div className="mainbox-3-box2-text-top">
                      <span className='font-semibold'>Esports World Cup 2024</span>
                    </div>
                    <div className="mainbox-3-box2-text-bottom">
                      <span className='text-[#818283] text-sm'>Esports · LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mainbox-3-box3 w-full h-auto px-4 py-2 cursor-pointer">
                <div className="mainbox-3-box3-contents w-full h-auto">
                  <div className="mainbox-3-box3-contents-top w-full h-auto flex justify-between items-center">
                    <div className="mainbox-3-box3-contents-top-title">
                      <span className='text-[#818283]'>Politics · Trending</span>
                    </div>
                    <div className="mainbox-3-box3-contents-top-more">
                      <span className='text-[#818283] text-lg'>···</span>
                    </div>
                  </div>
                  <div className="mainbox-3-box3-contents-middle w-full h-auto">
                    <span className='font-bold'>#Israel</span>
                  </div>
                  <div className="mainbox-3-box3-contents-bottom w-full h-auto">
                    <span className='text-[#818283]'>133K posts</span>
                  </div>
                </div>
              </div>
              <div className="mainbox-3-box4 w-full h-auto px-4 py-2 cursor-pointer">
                <div className="mainbox-3-box4-contents w-full h-auto">
                  <div className="mainbox-3-box4-contents-top w-full h-auto flex justify-between items-center">
                    <div className="mainbox-3-box4-contents-top-title">
                      <span className='text-[#818283]'>Politics · Trending</span>
                    </div>
                    <div className="mainbox-3-box4-contents-top-more">
                      <span className='text-[#818283] text-lg'>···</span>
                    </div>
                  </div>
                  <div className="mainbox-3-box4-contents-middle w-full h-auto">
                    <span className='font-bold'>Middle East</span>
                  </div>
                  <div className="mainbox-3-box4-contents-bottom w-full h-auto">
                    <span className='text-[#818283]'>67.7K posts</span>
                  </div>
                </div>
              </div>
              <div className="mainbox-3-box5 w-full h-auto px-4 py-2 cursor-pointer">
                <div className="mainbox-3-box5-contents w-full h-auto">
                  <div className="mainbox-3-box5-contents-top w-full h-auto flex justify-between items-center">
                    <div className="mainbox-3-box5-contents-top-title">
                      <span className='text-[#818283]'>Politics · Trending</span>
                    </div>
                    <div className="mainbox-3-box5-contents-top-more">
                      <span className='text-[#818283] text-lg'>···</span>
                    </div>
                  </div>
                  <div className="mainbox-3-box5-contents-middle w-full h-auto">
                    <span className='font-bold'>#Hillary</span>
                  </div>
                  <div className="mainbox-3-box5-contents-bottom w-full h-auto">
                    <span className='text-[#818283]'>246K posts</span>
                  </div>
                </div>
              </div>
              <div className="mainbox-3-box6 w-full h-auto px-4 py-2 cursor-pointer">
                <div className="mainbox-3-box6-contents w-full h-auto">
                  <div className="mainbox-3-box6-contents-top w-full h-auto flex justify-between items-center">
                    <div className="mainbox-3-box6-contents-top-title">
                      <span className='text-[#818283]'>Politics · Trending</span>
                    </div>
                    <div className="mainbox-3-box6-contents-top-more">
                      <span className='text-[#818283] text-lg'>···</span>
                    </div>
                  </div>
                  <div className="mainbox-3-box6-contents-middle w-full h-auto">
                    <span className='font-bold'>Sheikh Hasina</span>
                  </div>
                  <div className="mainbox-3-box6-contents-bottom w-full h-auto">
                    <span className='text-[#818283]'>19.3K posts</span>
                  </div>
                </div>
              </div>
              <div className="mainbox-3-box7 w-full h-auto px-4 py-4 cursor-pointer">
                <div className="mainbox-3-box7-contents w-full h-auto flex justify-start items-center">
                  <span className='text-[#1D98F0]'>Show More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-3-mainbox-4 w-full h-auto flex justify-center items-center">
            <div className="mainbox4-parent-box w-[350px] h-auto border border-[#2F3336] rounded-xl my-6">
              <div className="mainbox4-box1 px-4 py-3 w-full h-auto">
                <div className="mainbox4-box1-contents">
                  <span className='font-bold text-xl'>Who to follow</span>
                </div>
              </div>
              <div className="mainbox4-box2 px-4 py-3 w-full h-auto cursor-pointer">
                <div className="mainbox4-box2-contents w-full h-auto flex justify-between items-center">
                  <div className="mainbox4-box2-contents-top w-full h-auto flex justify-start items-center">
                    <div className="mainbox4-box2-contents-profile-pic w-11 h-11 rounded-3xl mx-1">
                      <div className="bg-[url('/Assests/images/profile.jpg')] bg-center bg-cover bg-no-repeat w-10 h-10 rounded-3xl flex justify-center items-center"></div>
                    </div>
                    <div className="mainbox4-box2-contents-username">
                      <div className="mainbox4-box2-contents-username-name flex justify-center items-center">
                        <span className='font-bold'>Daksh Baidya</span>
                        <div className='mainbox4-box2-contents-username-name-verified-mark'>
                          <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg></span>
                        </div>
                      </div>
                      <div className="mainbox4-box2-contents-username-nameUrl">
                        <span className='text-[#818283]'>@daksh_baidya</span>
                      </div>
                    </div>
                  </div>
                  <div className="mainbox4-box2-contents-bottom h-auto">
                    <div className="mainbox4-box2-contents-follow">
                      <div className="mainbox4-box2-contents-follow-button w-20 h-8 bg-white text-black flex justify-center items-center rounded-full"><button>Follow</button></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mainbox4-box3 px-4 py-3 w-full h-auto cursor-pointer">
                <div className="mainbox4-box2-contents w-full h-auto flex justify-between items-center">
                  <div className="mainbox4-box2-contents-top w-full h-auto flex justify-start items-center">
                    <div className="mainbox4-box2-contents-profile-pic w-11 h-11 rounded-3xl mx-1">
                      <div className="bg-[url('/Assests/images/profile.jpg')] bg-center bg-cover bg-no-repeat w-10 h-10 rounded-3xl flex justify-center items-center"></div>
                    </div>
                    <div className="mainbox4-box2-contents-username">
                      <div className="mainbox4-box2-contents-username-name flex justify-center items-center">
                        <span className='font-bold'>Daksh Baidya</span>
                        <div className='mainbox4-box2-contents-username-name-verified-mark'>
                          <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg></span>
                        </div>
                      </div>
                      <div className="mainbox4-box2-contents-username-nameUrl">
                        <span className='text-[#818283]'>@daksh_baidya</span>
                      </div>
                    </div>
                  </div>
                  <div className="mainbox4-box2-contents-bottom h-auto">
                    <div className="mainbox4-box2-contents-follow">
                      <div className="mainbox4-box2-contents-follow-button w-20 h-8 bg-white text-black flex justify-center items-center rounded-full"><button>Follow</button></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mainbox4-box4 px-4 py-3 w-full h-auto cursor-pointer">
                <div className="mainbox4-box2-contents w-full h-auto flex justify-between items-center">
                  <div className="mainbox4-box2-contents-top w-full h-auto flex justify-start items-center">
                    <div className="mainbox4-box2-contents-profile-pic w-11 h-11 rounded-3xl mx-1">
                      <div className="bg-[url('/Assests/images/profile.jpg')] bg-center bg-cover bg-no-repeat w-10 h-10 rounded-3xl flex justify-center items-center"></div>
                    </div>
                    <div className="mainbox4-box2-contents-username">
                      <div className="mainbox4-box2-contents-username-name flex justify-center items-center">
                        <span className='font-bold'>Daksh Baidya</span>
                        <div className='mainbox4-box2-contents-username-name-verified-mark'>
                          <span><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" /></svg></span>
                        </div>
                      </div>
                      <div className="mainbox4-box2-contents-username-nameUrl">
                        <span className='text-[#818283]'>@daksh_baidya</span>
                      </div>
                    </div>
                  </div>
                  <div className="mainbox4-box2-contents-bottom h-auto">
                    <div className="mainbox4-box2-contents-follow">
                      <div className="mainbox4-box2-contents-follow-button w-20 h-8 bg-white text-black flex justify-center items-center rounded-full"><button>Follow</button></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mainbox4-box5 px-4 py-3 w-full h-auto cursor-pointer">
                <div className="mainbox4-box5-contents w-full h-auto flex justify-start items-center">
                  <span className='text-[#1D98F0]'>Show More</span>
                </div>
              </div>
            </div>
          </div>
          <div className="main-3-mainbox-5 w-full h-auto flex flex-col justify-center items-center">
            <div className="mainbox-5-top w-full h-auto">
              <div className="mainbox-5-top-contents flex justify-center items-center">
                <span className='mx-2 text-sm text-[#818283]'>Terms of Service</span>
                <span className='mx-2 text-sm text-[#818283]'>Privacy Policy</span>
                <span className='mx-2 text-sm text-[#818283]'>Cookie Policy</span>
              </div>
            </div>
            <div className="mainbox-5-bottom w-full h-auto">
              <div className="mainbox-5-bottom w-full h-auto">
                <div className="mainbox-5-bottom-contents flex justify-center items-center">
                  <span className='mx-2 text-sm text-[#818283]'>Accessibility</span>
                  <span className='mx-2 text-sm text-[#818283]'>Ads info</span>
                  <span className='mx-2 text-sm text-[#818283]'>More ···</span>
                  <span className='mx-2 text-sm text-[#818283]'>© 2024 X Corp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
