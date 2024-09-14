'use client'
import React from 'react'
import Link from 'next/link'

import { Category, Media } from '../../../../payload/payload-types'
import { useFilter } from '../../../_providers/Filter'

import classes from './index.module.scss'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  // Ensure 'media' is correctly cast and check if it exists
  const media = category.media as Media | null;

  // Safeguard against 'media' being null or undefined
  const backgroundImage = media ? `url(${media.url})` : 'none';

  const { setCategoryFilters } = useFilter()

  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage }}
      onClick={() => setCategoryFilters([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
