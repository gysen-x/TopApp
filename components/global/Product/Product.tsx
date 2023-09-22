import stls from './Product.module.css'
import cn from 'classnames'
import ProductProps from './Product.props'
import { Card } from '../Card/Card'
import Image from 'next/image'
import { Tag } from '../Tag/Tag'
import { Button } from '../Button/Button'
import { declonationOfNumbers, priceRu } from '@/helpers/helpers'
import { Divider } from '../Divider/Divider'

export const Product = ({ product, className }: ProductProps): JSX.Element => {
	return (
		<Card className={cn(className, stls.product)}>
			<div className={stls.logo}>
				<Image
					src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
					width={70}
					height={70}
					alt={product.title}
				/>
			</div>
			<div className={stls.title}>{product.title}</div>
			<div className={stls.price}>
				{priceRu(product.price)}
				{product.oldPrice && (
					<Tag className={stls.priceTag} color='green'>
						{priceRu(product.price - product.oldPrice)}
					</Tag>
				)}
			</div>
			<div className={stls.credit}>
				{priceRu(product.credit)}/<span>мес</span>
			</div>
			<div className={stls.rating}>Rating {product.initialRating}</div>
			<div className={stls.tags}>
				{product.categories.map(category => (
					<Tag className={stls.tag} key={category} color='ghost'>
						{category}
					</Tag>
				))}
			</div>
			<div className={stls.priceTitle}>цена</div>
			<div className={stls.creditTitle}>кредит</div>
			<div className={stls.rateTitle}>
				{product.reviewCount}{' '}
				{declonationOfNumbers(product.reviewCount, [
					'отзыв',
					'отзыва',
					'отзывов'
				])}
			</div>
			<Divider className={stls.hr} />
			<div className={stls.description}>{product.description}</div>
			<div className={stls.features}>
				{product.characteristics.map(feature => (
					<div className={stls.feature} key={feature.name}>
						<span className={stls.featureName}>{feature.name}</span>
						<span className={stls.featureDots}></span>
						<span className={stls.featureValue}>{feature.value}</span>
					</div>
				))}
			</div>
			<div className={stls.adv}>
				{product.advantages && (
					<div className={stls.advantages}>
						<h3>Преимущества</h3>
						<p>{product.advantages}</p>
					</div>
				)}
				{product.disadvantages && (
					<div className={stls.disadvantages}>
						<h3>Недостатки</h3>
						<p>{product.disadvantages}</p>
					</div>
				)}
			</div>
			<Divider className={cn(stls.hr, stls.hr2)} />
			<div className={stls.actions}>
				<Button appearance='primary'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow='right'>
					Читать отзывы
				</Button>
			</div>
		</Card>
	)
}
