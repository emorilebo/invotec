import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const pricing = {
  tiers: [
    {
      title: 'Bronze',
      price: 17500,
      frequency: '/month',
      description: 'Fast enough to indulge your regular internet needs.',
      features: ['Unlimited', '10Mbps Top speed', 'Up to 5 users with no traffic',],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Silver',
      price: 27275,
      frequency: '/month',
      description: 'Super-fast connection, Stream HD videos with no lag.',
      features: [
        'Unlimited',
        '20Mbps Top Speed',
        'Up to 10 users with no traffic',
        
      ],
      cta: 'Monthly billing',
      mostPopular: true,
    },
    {
      title: 'Gold',
      price: 37175,
      frequency: '/month',
      description: 'Enjoy blazing download speeds and watch 4K videos online with ease.',
      features: [
        'Unlimited',
        '30Mbps Top Speed',
        'Download videos at 5MB/s',
        'Up to 20 users with no traffic',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Price() {
    return (
        <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Pricing Plans</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
    
          {/* Tiers */}
          <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">₦{tier.price}</span>
                    <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{tier.description}</p>
    
                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
    
                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Price
