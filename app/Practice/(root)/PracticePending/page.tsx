"use client"
import React from 'react'
import { useActionState, startTransition } from 'react'
import { Loader } from 'lucide-react'
import FetchData from '@/components/_components/actions/FetchData'
import { Button } from '@/components/ui/button'

const page = () => {
      const [state, action, pending] = useActionState(FetchData, false)
  return (
    <div>
         
    <Button variant={"default"} onClick={() => startTransition(action)}>
      {pending ? <Loader /> : 'Fetch Data'}
    </Button>
<div>
    <img src="/andreawise.png"  style={{
      width:"350px",
      float:"left",
      shapeOutside:"url(/andreawise.png)",
      shapeMargin:"8px"
    }}/>
    <p>
      huihuh
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro repellendus placeat ea officia, inventore fugiat, nam deleniti ut omnis hic, quo tempore voluptas temporibus. Assumenda dolorem aliquam optio praesentium a!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vel consequuntur voluptatum ex laborum maxime. Earum illum reiciendis et, tempora perspiciatis, non nesciunt nobis ipsam eum nulla nam minima officiis!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, doloribus accusantium qui voluptates quod doloremque id atque quam ex dicta amet assumenda reprehenderit excepturi modi soluta fugiat harum error libero.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium officia vero temporibus delectus quaerat quam explicabo eius accusantium, ducimus rem harum aliquam, magnam aut. Veniam, tenetur. Praesentium, optio quis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus non laborum enim corporis architecto praesentium nam. Maiores, itaque suscipit unde et amet dolorum error, nostrum omnis corrupti esse dolores eum!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus saepe quidem, earum nam dolorem voluptate vitae aut, atque reiciendis nostrum voluptas, eligendi natus consequatur debitis pariatur? Reiciendis soluta veniam facilis.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia minima laborum ipsa earum, minus voluptas iure soluta delectus, reprehenderit repudiandae provident id aut harum illum nesciunt quos facere aliquid.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita sit mollitia asperiores nihil? Laudantium, ipsa libero, iste harum, amet unde numquam aliquid voluptatem possimus sed nemo. Exercitationem, atque debitis.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deserunt repellendus a tempora corrupti consequuntur voluptatum adipisci omnis debitis velit sunt nihil ipsum, perferendis quae architecto natus! Mollitia, debitis assumenda.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum ad exercitationem dolore quas natus pariatur praesentium quo vero similique, distinctio, suscipit numquam aliquam, deserunt sit obcaecati ab fuga consectetur.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam distinctio delectus optio omnis sint facere nobis exercitationem at id tempora vel rem sit expedita quos quae, explicabo repellat ea a.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto quia natus temporibus reprehenderit? Numquam ad facilis voluptatem esse unde consequuntur, cumque quisquam aut optio repudiandae dicta omnis repellendus at?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic sed nobis officiis consectetur expedita inventore necessitatibus quod fugiat sit! Similique itaque minima iste aut sequi sunt ipsum in veniam.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam placeat adipisci ea incidunt nostrum porro, harum vero velit tempora quae explicabo sunt voluptatum distinctio, numquam magni illum assumenda veritatis laborum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut explicabo, id atque quaerat vitae eaque eligendi molestiae temporibus! Enim soluta alias nulla, quam odio illo et veritatis consequatur aspernatur.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis officia earum amet quae veritatis soluta, accusamus culpa deserunt iusto enim id porro voluptate cumque repudiandae. Totam quod quo consequatur. Voluptas!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum praesentium mollitia aliquam fugit velit atque nulla optio. Illo libero voluptas nesciunt, minus optio repellat eaque. Nulla blanditiis quas veniam.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis corporis pariatur ipsa delectus sequi a. Eum quam labore esse, natus distinctio necessitatibus perferendis doloribus, modi saepe quibusdam, blanditiis voluptatibus cupiditate.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores inventore cumque quod blanditiis omnis, placeat praesentium necessitatibus, voluptatem, sit culpa consequuntur unde alias delectus quasi quibusdam rerum. Delectus, voluptatum illo!</p>
  </div>
    </div>
  )
}

export default page