import { Text } from '@vook-client/design-system'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { dragBlock, iconTitle } from './IconSectionTitle.css'

export const IconSectionTitle = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref)

  return (
    <>
      <div
        style={{
          visibility: 'hidden',
          position: 'absolute',
          top: 300,
        }}
        ref={ref}
      >
        trigger
      </div>
      {isInView && (
        <div className={iconTitle}>
          <Text type="display-2" fontWeight="bold">
            여기저기 흩어진 용어, 검색하는데 지치셨나요?
          </Text>
          <Text type="display-2" fontWeight="bold">
            <Text
              type="display-2"
              color="palette-primary-500"
              fontWeight="bold"
            >
              부크
            </Text>
            로 간편하게 관리하고
            <Text
              type="display-2"
              fontWeight="bold"
              style={{ position: 'relative' }}
            >
              <div className={dragBlock} /> 드래그만으로 뜻을 확인
            </Text>
            하세요.
          </Text>
        </div>
      )}
    </>
  )
}
