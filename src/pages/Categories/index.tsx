import ProductList from '../../components/ProductList'

import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, SetGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, SetGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, SetGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, SetGamesLuta] = useState<Game[]>([])
  const [gamesRPG, SetGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => SetGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => SetGamesEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => SetGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => SetGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => SetGamesRPG(res))
  })

  return (
    <>
      <ProductList games={gamesAcao} title="Ação" background="gray" />
      <ProductList games={gamesEsportes} title="Esportes" background="black" />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesRPG} title="RPG" background="black" />
      <ProductList games={gamesSimulacao} title="Simulação" background="gray" />
    </>
  )
}

export default Categories
