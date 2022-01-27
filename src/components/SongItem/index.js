import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

import {DeleteButton} from './styledComponents'

const SongItem = props => {
  const {songDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <li className="song-container">
      <div className="song-detail">
        <img src={imageUrl} alt="track" className="image" />
        <div className="song-name-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <p className="duration">{duration}</p>
      </div>
      <DeleteButton type="button" data-testid="delete" onClick={onDeleteTrack}>
        <AiOutlineDelete size={25} />
      </DeleteButton>
    </li>
  )
}

export default SongItem
