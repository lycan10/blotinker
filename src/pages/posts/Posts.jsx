import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'

import banner from "../../assets/main-post.jpg"

import Picker from "emoji-picker-react";

import "./posts.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom'

import { FaFacebookF, FaRegCommentAlt  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLink } from "react-icons/ai";

import { FaRegHeart } from "react-icons/fa";

import { IoEyeOutline } from "react-icons/io5";

import { SlEmotsmile } from "react-icons/sl";

import image1 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image3 from "../../assets/3.jpg"

import Footer from '../../components/footer/Footer'
const Posts = () => {

    const [text, setText] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const selectedEmoji = emojiObject.emoji;
        setText(prevText => prevText + selectedEmoji);
        setShowPicker(false);
    };

    const recentData = [
        {
            id: 0,
            img:image1,
            title: "FETCH FESTIVAL BRLN 2023",
            views: 840,
            comment: 2,
            likes: 4
        },
        {
            id: 1,
            img:image2,
            title: "365 DAYS. 365 FRAMES.",
            views: 375,
            comment: 2,
            likes: 29
        },
        {
            id: 2,
            img:image3,
            title: "20 MUSEUMS YOU SHOULD VISIT AT LEAST ONCE",
            views: 670,
            comment: 7,
            likes: 9
        },
    ]

   


  return (
    <div className='posts'>
        <Navbar />
        <div className="post-main">
        <div className="posts-container">
            <div className="post-time">
                <ul>
                    <li>Jun 12, 2023</li>
                   <span><li></li></span> 
                    <li>2 min read</li>
                </ul>
            </div>
            <div className="post-header">
                <h1>A SURREAL CONCRETE DREAM</h1>
                <p>Imagine a universe made with concrete alone. Arla Page explores the strength of cement in a series of 3D images and videos.</p>
                <div className="posts-header-img">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="post-body">
                <p>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. </p>
            <div className="post-quote">
                <h1>Design with Ease</h1>
                <div className="post-quote-line-container">
                <div className="post-quote-line"></div>
                <div className="post-quote-content">
                    <p>"Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”</p>
                </div>
                </div>
                <p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.</p>
            </div>
            <div className="post-paragraph">
                <h1>Create Relevant Content</h1>
                <p>You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away.</p>
            </div>
            <div className="post-quote">
                <h1>Stun Your Readers</h1>
                <div className="post-quote-line-container">
                <div className="post-quote-line"></div>
                <div className="post-quote-content">
                    <p>“Be original, show off your style, and tell your story.”</p>
                </div>
                </div>
                <p>Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.  </p>
            </div>
            <div className="post-paragraph">
                <h1>Get Inspired</h1>
                <p> To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!</p>
            </div>

            <div className="post-socials-container">
                <div className="posts-socials">
                <Link ><FaFacebookF className='posts-socials-space' /></Link>
                <Link><FaXTwitter className='posts-socials-space' /></Link>
                <Link><FaInstagram className='posts-socials-space' /></Link>
                <Link><AiOutlineLink className='posts-socials-space' /></Link>
                </div>
                <div className="post-category">
                    <ul>
                        <li>Main post</li>
                        <li>Adventure</li>
                        <li>Woods</li>
                    </ul>
                </div>
            </div>
            <div className="post-data-container">
                <div className="post-data">
                    <div className="post-data-content">
                        <p>793</p>
                        <span>Views</span>
                    </div>
                    <div className="post-data-content">
                        <p>7</p>
                        <span>Comments</span>
                    </div>
                </div>
                <div className="post-data">
                    <div className="post-data-content">
                        <p>7</p>
                        <span><FaRegHeart className='post-heart'/></span>
                    </div>
                </div>
            </div>
          
            </div>
        </div>
        <div className="recent-posts-container">
                <p>Recent Posts</p>
                <div className="recent-posts">
                {
                    recentData.map((item)=>{
                        return(
                                <div  key={item.id}>
                                    <div className="recent-post-image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="recent-post-title"> <h1>{item.title}</h1> </div>
                                    <div className="recent-post-content">
                                    <div className="recent-post-data-container">
                                        <div className="recent-post-data">
                                            <div className="recent-post-data-content">
                                                <IoEyeOutline className='recent-post-socials' />
                                                <p>{item.views}</p>
                                                
                                            </div>
                                            <div className="recent-post-data-content">
                                                <FaRegCommentAlt className='recent-post-social' />
                                                <span>{item.comment}</span>
                                            </div>
                                        </div>
                                        <div className="recent-post-data">
                                            <div className="recent-post-data-content">
                                                <p>{item.likes}</p>
                                                <span><FaRegHeart className='post-heart'/></span>
                                            </div>
                                        </div>
                                    </div>
            
                                    </div>
                                </div>            
                            )
                    })
                }
            </div>
            <div className="recent-posts-mobile">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {recentData.map((item)=> (
                        <SwiperSlide >
                            <div  key={item.id}>
                                    <div className="recent-post-image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="recent-post-title"> <h1>{item.title}</h1> </div>
                                    <div className="recent-post-content">
                                    <div className="recent-post-data-container">
                                        <div className="recent-post-data">
                                            <div className="recent-post-data-content">
                                                <IoEyeOutline className='recent-post-socials' />
                                                <p>{item.views}</p>
                                                
                                            </div>
                                            <div className="recent-post-data-content">
                                                <FaRegCommentAlt className='recent-post-social' />
                                                <span>{item.comment}</span>
                                            </div>
                                        </div>
                                        <div className="recent-post-data">
                                            <div className="recent-post-data-content">
                                                <p>{item.likes}</p>
                                                <span><FaRegHeart className='post-heart'/></span>
                                            </div>
                                        </div>
                                    </div>
            
                                    </div>
                                </div>        
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
         </div> 
         <div className="post-comments-container">
            <div className="post-comments-title">
                <h1>Comments</h1>
            </div>
            <div className="post-comments-inputs">
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Write a comment...' />
                    <div className="post-comments-emoji">
                        <img
                            className="emoji-icon"
                            src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                            onClick={() => setShowPicker((val) => !val)}
                            alt=''
                        />
                        {showPicker && (
                            <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
                        )}
                    </div>
                </div>
         </div>
         </div>     
    </div>
    
  )
}

export default Posts