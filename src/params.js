import { Dimensions } from 'react-native'

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // proporção do painel superior na tela
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get('window').width
    return Math.floor(width / this.blockSize)
  },
  getRowsAmount() {
    const totalheight = Dimensions.get('window').height
    const boardHeight = totalheight * (1 - this.headerRatio)
    return Math.floor(boardHeight / this.blockSize)
  }
}

export default params