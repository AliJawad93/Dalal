import React, { useState } from 'react';
import './newHouse.css'

const NewHouse = () => {
  const [ownerName, setOwnerName] = useState('');
  const [distance, setDistance] = useState('');
  const [location, setLocation] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    const previews = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push(event.target.result);
        if (previews.length === files.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data
    console.log('Owner Name:', ownerName);
    console.log('Distance:', distance);
    console.log('Location:', location);
    console.log('House Number:', houseNumber);
    console.log('Number of Rooms:', numberOfRooms);
    console.log('Selected Images:', selectedImages);

    // Reset form fields
    setOwnerName('');
    setDistance('');
    setLocation('');
    setHouseNumber('');
    setNumberOfRooms('');
    setSelectedImages([]);
    setImagePreviews([]);
  };

  return (
    <div className="container" style={{ width: "83%", }}>
    <nav class="navbar navbar-expand-lg ">
      <div class="container">
        <div class="navbar-collapse ">
          <form class="d-flex" role="search">
            <input
              class="form-control fs-5 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
    
          </form>
        </div>

        <div className="profile">
        <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <h5>Ali Jawad</h5>
       </div>
      </div>
    </nav>

    <div className="header">
      DASHBOARD
      <h3>Add New House </h3>
    </div>
    <div style={{textAlign: "right"}}>
    </div>

    
    <div className="card-form">
      <form onSubmit={handleFormSubmit}>
        <label className="form-label">
          <div className='title-form-input'>
          Owner's Name:
          </div>
          <input
            className="form-input"
            type="text"
            value={ownerName}
            onChange={(e) => handleInputChange(e, setOwnerName)}
          />
        </label>
        <label className="form-label">
        <div className='title-form-input'>
          Distance of the House:
          </div><input
            className="form-input"
            type="text"
            value={distance}
            onChange={(e) => handleInputChange(e, setDistance)}
          />
        </label>
        <label className="form-label">
        <div className='title-form-input'>
          Location of the House:
          </div><input
            className="form-input"
            type="text"
            value={location}
            onChange={(e) => handleInputChange(e, setLocation)}
          />
        </label>
        <label className="form-label">
        <div className='title-form-input'>
          Number of the House:
          </div> <input
            className="form-input"
            type="text"
            value={houseNumber}
            onChange={(e) => handleInputChange(e, setHouseNumber)}
          />
        </label>
        <label className="form-label">
        <div className='title-form-input'>
          Number of Rooms in the House:
          </div><input
            className="form-input"
            type="text"
            value={numberOfRooms}
            onChange={(e) => handleInputChange(e, setNumberOfRooms)}
          />
        </label>
        <label className="form-label">
        <div className='title-form-input'>
          Upload Images:
          </div>
          <input
            className="form-input"
            type="file"
            multiple
            onChange={handleImageUpload}
          />
        </label>
        <div className="image-preview">
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              className="preview-image"
              src={preview}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <button type="submit" className="form-button">
          Upload
        </button>
      </form>
    </div>
    </div>
  );
};

export default NewHouse;
