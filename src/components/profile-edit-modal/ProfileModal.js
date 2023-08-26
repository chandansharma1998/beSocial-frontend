import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { uploadImg } from '../../actions/uploadActions';
import { useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import { updateUser } from '../../actions/userActions';

function ProfileModal({modalOpened,setModalOpened, data}) {
  const theme = useMantineTheme();
  const dispatch = useDispatch()
  const params = useParams()
  const {password, ...other} = data
  
  const [formValues , setFormValues] = useState(other)
  const [profilePicture,setProfilePicture] = useState(null)
  const [coverPicture,setcoverPicture] = useState(null)

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
  }

  const handleImageChange = e =>{
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      e.target.name === "profilePicture"? setProfilePicture(img) : setcoverPicture(img)
    }
  }

  const handleUpdate = e =>{
    e.preventDefault();
    let userData = formValues
    if(profilePicture){
      const formData = new FormData()
      const filename = Date.now() + profilePicture.name
      formData.append("name",filename);
      formData.append("file",profilePicture);
      userData.profilePicture = filename
      try {
          dispatch(uploadImg(formData))
      } catch (err) {
          console.log(err);
      }
    }
    if(coverPicture){
      const formData = new FormData()
      const filename = Date.now() + coverPicture.name
      formData.append("name",filename);
      formData.append("file",coverPicture);
      userData.coverPicture = filename
      try {
          dispatch(uploadImg(formData))
      } catch (err) {
          console.log(err);
      }
    }
    dispatch(updateUser(params.id , userData))
    setModalOpened(false)
  }
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form className='info-form'>
        <h3>My Info</h3>
        <div>
          <input className='info-input' type='text' name='firstname' value = {formValues.firstname} placeholder='First Name' onChange={handleChange}/>
          <input className='info-input' type='text' name='lastname' value = {formValues.lastname} placeholder='Last Name' onChange={handleChange}/>
        </div>

        <div>
          <input className='info-input' type='text' name='worksAt' value = {formValues.worksAt} placeholder='Works At' onChange={handleChange}/>
        </div>

        <div>
          <input className='info-input' type='text' name='livesIn' value = {formValues.livesIn} placeholder='Lives In' onChange={handleChange}/>
          <input className='info-input' type='text' name='country' value = {formValues.country} placeholder='Country' onChange={handleChange}/>
        </div>

        <div>
          <input type='text' className='info-input' name="relationship" value = {formValues.relationship} placeholder='Relationship Status' onChange={handleChange}/>
        </div>

        <div>
          Profile Image
          <input type='file' name='profilePicture' onChange={handleImageChange}/>
          Cover Image
          <input type='file' name='coverPicture' onChange={handleImageChange}/>
        </div>

        <button className='button info-button' onClick={handleUpdate}>Update</button>

      </form>
    </Modal>
  );
}

export default ProfileModal;