import { Cast, ProductionCompany } from '@/types/'
import { User } from 'lucide-react'

type MovieInformationProps = {
  production_companies: ProductionCompany[]
  cast: Cast[]
}

export const MovieInformation = ({ production_companies, cast }: MovieInformationProps) => {
  console.log(production_companies)

  return (
    <section className='text-primary container py-8'>
      <div className='max-w-full'>
        <h2 className="font-bold text-4xl pb-3"> Production Companies</h2>
        <ul className="inline-flex gap-5 overflow-y no-wrap overflow-x-auto py-2 max-w-screen-lg">
          {
            cast.map(castUser => (
              <li key={castUser.id} className="text-center text-primary rounded flex-1">
                  <div>
                    {
                      castUser.profile_url
                        ? <div
                        style={{ backgroundImage: `url(${castUser.profile_url})` }}
                        className="bg-center bg-cover bg-no-repeat transition duration-500 min-h-[150px] min-w-[150px] w-full rounded">
                      </div>
                      : <div
                        style={{ backgroundImage: `url(${castUser.profile_url})` }}
                        className="bg-center bg-cover bg-no-repeat transition duration-500  w-full rounded">
                        <User className='w-full min-h-[150px] min-w-[150px]' />
                      </div>
                    }
                    
                    <p>{castUser.name}</p>
                    <p className='text-xs text-gray-400'>{castUser.character}</p>
                  </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-4xl pb-3"> Production Companies</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {
            production_companies.map(production => (
              <li key={production.id} className="text-center bg-white rounded-xl px-1 text-black">
                {
                  production.logo_url
                    ? <div
                    style={{ backgroundImage: `url(${production.logo_url})` }}
                    className="bg-center bg-contain bg-no-repeat transition duration-500 min-h-[150px] sm:min-h-[150px]">
                  </div>
                  : <div className="h-full grid items-center">
                    <p className="font-bold">{production.name}</p>
                  </div>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
