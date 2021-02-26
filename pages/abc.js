import { Input, InputGroup, Icon } from 'rsuite'
import { FaSearch } from 'react-icons/fa'

const styles = {}

export default function Abc () {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Icon icon='star' />
      <Icon icon='camera-retro' size='lg' />
      <Icon icon='camera-retro' size='2x' />
      <Icon icon='camera-retro' size='3x' />
      <Icon icon='camera-retro' size='4x' />
      <Icon icon='camera-retro' size='5x' />
      <Input style={styles} disabled placeholder='haha' />
      <InputGroup style={styles} disabled>
        <Input placeholder='haha' />
        <InputGroup.Addon>
          <Icon icon='star' />
        </InputGroup.Addon>
      </InputGroup>
    </div>
  )
}
