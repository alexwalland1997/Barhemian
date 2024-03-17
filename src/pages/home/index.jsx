import Navbar from "../../navbar";

export default function home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <img
          src="https://scontent.flhr9-1.fna.fbcdn.net/v/t39.30808-6/402348527_306947578910990_6391907424327792778_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JedpKJJW11sAX-PywWk&_nc_ht=scontent.flhr9-1.fna&oh=00_AfB8tiQhw2LukTh52HYf2oGnpK48FxLS4KJegInqTel91Q&oe=65FC911F"
          alt="barhemian"
          height="100%"
          width="100%"
        ></img>
      </div>
      <div id="aboutUs">
        <h1>About Us</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
      </div>
      <div id="socials">
        <div id="fb"
          data-href="https://www.facebook.com/TwineBar"
          data-tabs="timeline"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
          class="fb-page fb_iframe_widget"
          fb-xfbml-state="rendered"
          fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=734&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FTwineBar&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
        >
            <iframe     
              name="f1a8a6b92bdf3b3be"
              height="500px"
              data-testid="fb:page Facebook Social Plugin"
              title="fb:page Facebook Social Plugin"
              allowtransparency="true"
              allow="encrypted-media"
              src="https://web.facebook.com/v19.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfa7e856de7046dc13%26domain%3Ddevelopers.facebook.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff817f331681da5923%26relation%3Dparent.parent&amp;container_width=734&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FTwineBar&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline"
              className=""
            ></iframe>
            {/* <div id="reviews">
              <h1>What People say</h1>
            </div> */}
        </div>
      </div>
    </>
  );
}
