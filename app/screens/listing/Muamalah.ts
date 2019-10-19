type Geometry = {
  latitude: number,
  longitude: number
}
type Muamalah = {
  name: string
  address: string
  phone: string
  products: string[],
  services: string[]
  coordinate?: Geometry
  [key: string]: any
}

export default Muamalah