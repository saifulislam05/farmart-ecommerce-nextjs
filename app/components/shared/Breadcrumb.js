import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'

const Breadcrumb = ({ }) => {
    const router = useRouter();
    const [items, setItems] = useState([]);
    
    const generateBredcrumbs = () => {
        const asPathWithoutQuery = router.asPath.split("?")[0];
        const asPathNestedRoutes = asPathWithoutQuery.split("/").filter(v => v.length > 0);

        const crumbList = asPathNestedRoutes.map((subPath, index) => {
            const href = "/"+ asPathNestedRoutes.slice(0, index + 1).join("/")
            const label = subPath;
            return {href, label}
        })

        return [{ href: "/", label: "Home" }, ...crumbList];
    }

    useEffect(() => {
        setItems(generateBredcrumbs())
    },[router])

  return (
      <div className="text-color">
          {items.map((item, index) => (
              <span className='capitalize' key={index}>
                  {items.length - 1 !== index ? (
                      <>
                          <Link href={item.href}><a href={item.href}>{item.label}</a></Link>
                          <span className="mx-2">/</span>
                      </>
                  ) : (
                          <span className="text-title">{item.label}</span>
                  )}
                  
    </span>
))}



          
      </div>
  )
}

export default Breadcrumb