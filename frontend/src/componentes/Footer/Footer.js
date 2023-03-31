import React from "react";
import {
  Anchor,
  Image,
  Navbar
} from 'react-bootstrap';
import './style.css'


function FooterIcons(){
  return (
    <footer>

     <div class="footer">
                    <div class="col-sm-6 col-md-3 item">
                     

                    </div>
                    <div class="col-sm-6 col-md-3 item">
                       
                        <ul>
                            <li><Anchor href='https://www.instagram.com/'><Image className='Icones' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'/></Anchor>
                            <Anchor href='https://pt-br.facebook.com/'> <Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png?width=120&name=sm-icons-facebook-logo.png'/></Anchor>
                            <Anchor href='https://twitter.com/'> <Image className='Icones' src='https://www.sendible.com/hs-fs/hubfs/Imported_Blog_Media/twitter-1.png?width=120&height=120&name=twitter-1.png'/></Anchor>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                       
                     
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
               
    </footer>
  );
};

export default FooterIcons;