import React,{useState, useRef}  from 'react'
import './postsshare.css'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilSchedule} from "@iconscout/react-unicons"
import {UilLocationPoint} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
import { useSelector, useDispatch } from 'react-redux'
import { uploadImg,uploadPost } from '../../../actions/uploadActions'


const PostsShare = () => {
    const [postImg, setPostImg] = useState(null);
    const imgRef = useRef();
    const descRef = useRef()
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.authReducer.authData)
    const loading = useSelector(state => state.postReducer.uploading)
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

    const handleImgChange =e =>{
        if(e.target.files && e.target.files[0]){
            let img = e.target.files[0];
            setPostImg(img)
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();

        //if we press share without desc or post img then just return
        if(descRef.current.value==="" && postImg===null){
            return
        }
        const newPost = {
            userId:user._id,
            desc:descRef.current.value,
        }
        if(postImg){

            //We create formData which contains img name and img file 
            //we store it in local storage in server side using multer
            const formData = new FormData()
            const filename = Date.now() + postImg.name
            formData.append("name",filename);
            formData.append("file",postImg);
            newPost.image = filename
            try {
                dispatch(uploadImg(formData))
            } catch (err) {
                console.log(err);
            }
        }
        //now that we have uploaded media using dispatch(formData),
        //we dispatch action to make the post
        dispatch(uploadPost(newPost))
        setPostImg(null)
        descRef.current.value="";
    }

  return (
    <div className='postsshare'>
        <img src={user.profilePicture ? serverPublic+user.profilePicture : serverPublic+"default.png"}/>
        <div>
            <input ref={descRef} type='text' placeholder="What's Happening"/>
            <div className='post-options'>
                <div className='option' style={{color:"var(--photo)"}} onClick={()=>imgRef.current.click()}>
                    <UilScenery/>
                    Photo
                </div>
                <div className='option' style={{color:"var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div>
                <div className='option' style={{color:"var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div>
                <div className='option' style={{color:"var(--schedule)"}}>
                    <UilSchedule/>
                    Schedule
                </div>
                <button className='button ps-button' onClick={handleSubmit} disabled={loading} >{loading?"Uploading":"Share"}</button>
                <div style={{display:"none"}}>
                    <input type='file' name='img' ref={imgRef} onChange={handleImgChange}/>
                </div>
            </div>
            {postImg && (
                <div className='preview-img'>
                    <UilTimes onClick={()=>setPostImg(null)}/>
                    <img src={URL.createObjectURL(postImg)} alt=""/>
                </div>
            )}
        </div>
    </div>
  )
}

export default PostsShare