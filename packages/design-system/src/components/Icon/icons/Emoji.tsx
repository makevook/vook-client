import { icon } from '../Icon.css'

export const emogiIcons = {
  pencil: (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>pencil</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4290)" />
        <defs>
          <pattern
            id="pattern0_559_4290"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4290" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4290"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  ),
  laptop: (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>laptop</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4292)" />
        <defs>
          <pattern
            id="pattern0_559_4292"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4292" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4292"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  ),
  'light-bulb': (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>light bulb</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4294)" />
        <defs>
          <pattern
            id="pattern0_559_4294"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4294" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4294"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAADmyYXSvI3ryXPuz3/x0Xnw04Pw0n/w0Hbvznbvznntzn7qxnHqyXycmJDdyJCbl5Huz4DryXWrpJfjxn/nx32xq6Dz14P12ofz1Hr014Lz2IeclYf02Iby1oTv0HXx1IPw04Hv0IDtz37tzXzszYHtznzszYOhnZfszYHu0YTgzJOYlZDsy3HtynKhnJSalpCfmpRHR0TizpWFg384NzSVkYyRjYd9fHqfnJX02Ify1YM4ODXx033x1YTvznfuzXPx1IWQi4OalYuZlY/y14XtzHXv0oTu0X88OzhCQj6Ih4TpxnHryHDryXPqy32Jh4Tqx3CRjYl4d3XGsX5oaGa6pnZrbGqIh4M/PjqOjIiUkY1MTEhHR0X//vn//vv//fj778f//v3+/Pf++un89uD/++723Ir++/L+++z9+uv78cr67sH9+u388tP//PX//PT99+T++vH++eX8+ef9+OL89Nf34pn12YL9+ej34JP88tH67bn99tz88c/78cz67sP57L7567v335C9ubP56rL14qrz3qL3343//PL999799dj889a5tK766qr456n++ef99tr89Nr88sz57Lf56a335KD45Jv/+/D89Nn78MT777/667T15K/04Kf35aT99t789NP77r356bD45qehnZj79N7r5Nn88sn778H46br46bb257X456uzr6n66KT45qHz3J+npJ734paXlZHz6+T89uLVz8jCvrn35rLy25z545T124bx6uH99+Do4df99NX889D88s7Lxb367bvGwbr666735av14aSwq6T3457v04b12H/z1Xx9fHri2czQy8XPycDJxb/77bfAvLa6t7Hx2pjy25P54pHv1o+TkY7Yw4z33og2NjPu59/m39Pa1MrNxrj457exraasqKT55p755Jjw2JWfmY14d3VVVFPi3NL88cbWzsDBu7D0352yq5z03pecmZSOjIhZWVc9PDnc1s7y2YyHhYI8Ojj07eW7sqDEr3xTUlFcAfDuAAAAXnRSTlMABQNmR/iV7uvWuHIhCwr+92c/OR0QD/77+vjz7eno5dWmfXlhPTErJyMY/qWNintzV1P++vLx7Obi4N3a2c7JycjHwLe3q56MhHlbW1VUUjo32tLQ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"
          />
        </defs>
      </svg>
    </span>
  ),
  sunglass: (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>sunglass</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4298)" />
        <defs>
          <pattern
            id="pattern0_559_4298"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4298" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4298"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACdlBMVEUAAAAoKCc8PTsbGxsqKigjJCIaGxouLiwaGxoUFBMzNDIZGhgoKScaGxopKSgYGBgWFhYaGxkZGhk3NzYVFRQ8PTswMC4TExIbGxs3NzUdHRwXGBcmJiUYGRgaGxoXFxctLiwPDw4wMDAxMTA3NzY1NjQpKig2NzQgIB8iIiEuLiw8PDoiIyEpKSgzNDIaGxoyMjAfHx4mJiUpKig0NDIYGBgYGBg8PDoxMS8uLy0bHBopKSgTFBMXFxUXGBY/QD45OjcgIB9UVVA8PDogISAyMzEYGRgoKCcqKig+Pjw/Pz0YGRg9Pjs1NTMaGhoaGhorKyocHBtAQT49PjwpKihNTkoXGBc/QD1VVlEREREwMC4yMzFISUVFRUI5OjgpKSgqKikwMC48PTozNDIWFhYgIB41NTM4OTcZGRkjIyEzNDEUFBQvLy0cHRwwMC1BQT9BQkAcHBsZGxsjJSUhIiEdIB87OzkfIB8bHR0dHR0aGxsvMjEiJCQYGRk+QUAhIyIyMjAeHx4cHh4nKSglJiQkJSM5OjcoKiowMS8nJyYrLS0lJycvLy0uLiwpLCszNjYuMTAqKigoKSc2OTg2NzQxNDMtMC9ESEY5PDs4ODYsLy4jIyJ+hYNrcm9aX15NUVA/Q0I1ODc1NjM0NDItLStwd3Vpb21eZGJYXVtRVlVLUE9JTUs7Pj0lJyV5gH51fXphZ2RLT01HS0orLCqAiIV3fnxtdHJTWFZOU1E9QD+JkY9zendlbGljaWddY2FcYl9WW1pPVFNJTk1GSUk9Pjs4OzqGjYt7goBobW1UWldTVE5CRUSQmJWMlZKEi4lnbGtISUREREDyQHt5AAAAcXRSTlMABA38kAr06t84JRgH8ObOVT4vKh0YFhP59Oe6p5FzZkEwLiwd++zr5+Le2tnUzcnGw8C9tLKWgWtdRTszKyci/Pvz8vHY1c3Iua2lkYiAeXhtaF9TTUxLSA769/X05N/d1tC9raulnZ2WjYl/Y01COypWjQUAAAVtSURBVFjD7ZXXQ9NQFIeDTGXjwL333nvvvffee12aNumgSWia7pbuFpBCy2wZgiKCioKCCs7/yJO0IM4nH3zo93jzy3fPTU5OsChRokSJEuX/IWbAsMmDBk+aOHHSoMlDB8T8PTo0HB3MR1P61ocNHr9if9zoRdvmnE9LS0xMnLll7uJryw7dXzfgF0XK0MHHlu+5emnuhZmJU6dOTTs3Z9vC0XH7V4yfNDQGW7VwxuYNBMMQhazOZi0zmYxGLU37p0ybtWP3wXvfbSnrji3befHsCD+t1RpNZWVWq62WVRNSYMPmGQsysQPDEZJKEUngOF5YqFarWZ31UZk24PBy3PpNvO3I8eNHDi3bOWuThPN6HQFtmaBQF8INBMEggdQMbF8sAqQ4YXB6Sl6HGoINIbfSLn9kfURzEonkjWT96Y0bz0yR8HA0LMvtLe5QMBjsgFiBQkpI4XYy4Q62lxeRCkV+SUdzceWLd0/K698WPS5qqqiuMQZ4k/9rd/ebAO+hTZ7qinq4+Lbp2ZOKF5VV1Y1KM4EjYPhYbFwCX5Cu1q587Wt+BaqKJ8/qij61fvjwsVxJ86I33d0czXuU5a0fPrZ2PX5bX/7g+cO2qvdPG0vsCjVfUsI4LHsMlMSoay1wsGB7c9XLh58flNfXFT3uav1Y1OmA+x2hLwEQebm61q6uT4+L6gTPy6r31R3ullIRBaLYMdkYljwKRIUiOZjcIV/1q/D5ntU3wQkb4Eim2XFxs40SSaCxqamurq6pHo4leNob3C12uYIXjUrGgIwExOCiAmepR9nT2PBUUD1/V/EAbA1+jts+ISZm9XZOEnDDGg9o2opfNbd3uEs8FheFS1HqUYxnyFZE4Aqzy2nprFH2vA752ptfVRW/rKx8+FDp4EYcxoDDIyQOT1VxcVtbZdvLYjiVr6GxR+kpletxEM2DgoD4JYghKJXeJXdaSsFV4n4d6gj62qubfQEvN3+Y0P7zOS/dGPT5ngK+YKjR3aOs6bQ4XWYxvP9dMeFvZymSIrFIpTHrC1z5ILN3empalCUlSrvR672NCdzkOFNpDSwLtNR47KUWeX6B2cB381IQ8exDSIYIhQgwGCI+uRxiGto7bVU4c3cEp1XpoeoILr1eb9ZoDIpcKYn2YmEy4CvJIRlGnCcWixkxjlMiAYXO71gc+diS53r9ClzBb2UIXxSgxLkMih0XEWWmImmuTCbLEcjNkZFkHu8UP3JMWY5F2ONw6EixQJ4AAxkCF+cQKHVlJLM2CTE5OTJw9AI+sBFa/5ZBvaJV0xxGWIzsByBEinFoRwIlrY1kshcgRkrCTqQs7IKiZGQeydJ0XN+IG7DYTxOwQ69IxmtUGopg0JL43pE3BpF4Hhwbh6qFHMlXTZjoxPFYHytO0dZcWR5JQlV5jBg0Gr2rAC9EsWP7MitTEUFQerOqVkHhhJggcIoSUTqtdnRkr3Ar0VpF+CkR8NQNmgLoO5UaR0lZfZn46zKEE6J8Zz7/SlUqDSBijVooqB/LT2qNlBi2EEGPQCNY7KVmtZpEY/pN+Kx0RFI4rnI5nU55PlBgYGHmxqX0FyUvgiHLwoOBRpND21rydbU6KUpf0z+UmS4j8UKcoEQqwKDT2WB6LxqC/UDmTJjWNjVfkdmsMbCsjWVQ0tEfQ1m7EmQkI0xtlq21wdguW5iF/cTKOSYTTGwdUMuyaoqQDh+V+XPoRMblkbEyREr5/4nNZk2LG4T9wpobaVabTceqeQnMxfSxydivxK8et3RUetLIkdNnLxh9IOu3P8mU1WOvzJsxfeT0pK3zltzKGAKh3xJzYsiEgQMHrslOwf5IvBCZsDY7HosSJUqUKFH+Dd8A/jy8f1FoEs0AAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </span>
  ),
  sparkles: (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>sparkles</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4300)" />
        <defs>
          <pattern
            id="pattern0_559_4300"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4300" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4300"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  ),
  'artist-pallete': (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>artist pallete</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4296)" />
        <defs>
          <pattern
            id="pattern0_559_4296"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4296" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4296"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC+lBMVEUAAACcaifFj0LKjjRrRinanCFPLBPYoUZaOhzWmC7HkDe4ciuybBzIhhXclxR5SB1KKBDdq1FFJg7QjRCDRApVNx2JQwhbOBdqMwonCALhrE/dnCTbnCnJiCWdajtoPhuPaE57OgPbmRqwZyXbqE9QLxTTolKLYDa8e0DFfknlt4BVLQvVpVi8hEPUqmPPolw/GwteOBd/XDjcqVHVkxe1gFJFKQ/fpj7To2COUxvMiAjQjw/MihSYckunf1nZuYZnQiKaaDS2hVOxbCzBjVfcqVHapk7dpEHTlynXnTbVmjDHhgzXnjrfqkvdqEnSlzDirlDXoUnaoT7UmzvdrFfgqUbQlSHhsFfhrEzapUfWnkLUmjXTmCHQkRbYokTaninaoDfOlCvEggbgrE/ksVTgrFPVmivcoTHXmifMjhbZqVf43z3HiR7LihDQoFb45EfYnC7OkR/CghLVpFDRoE7JjyoqwuWfMcbNlDXfqU/7UzvRmTfKkCNSIQaoTMTSlz1q5jxFzyoqo9+XQLX7ZE7UlRgjwBYqsuayU9GiQb+LJb33zCpBHQcups+BJbRnJqrlr03QmkWyhDa8fQ2ZMr/nslG+iCM4xSEOtAsyyfMpu+8uu95PpdepPs34RU3IlUm3ikT6az7EjD3fqDde3jVT1TD41CwZuBAns9SoWrJ3Tnb6j2TgsV2tfkjIjDJ7VirTnCZ1H6n7gW6udmL7fFrIoitovOU3lcaNNr6RQ6b46lWTZy+kairpuSZYtcUicKT7oYK+hWayk1eUhlbDmVJ07EaD0EOYdTu+izPBfTKWXyRqRCFNuudit+BFr947iLsli7iZV4lnhIjonmeU5mVtdGTKkFbeW0zuzUbWR0HowDhb1zRyxzGxgx6hjx1rjRVKnxNKk8Ztn59/QJ5HfJxhJ5v1upauZZSIqY6XnnLjb1LOY0jqOUjariH8zK9unYo7Z4h6bXq6s0KRmyR1miJ4gxI4mQ99sp1ZdYPntnixyVvyVT2lujAkpAyOwmndAAAARXRSTlMACRwQG/6GPE4xKP7+gGP+/tvHtZ0v/v39+urGsldIEv7+5a2sqYBx/fz56sm9YfLp07Sak3FvTf399uTb0aiN8uzb2K2kpDQIAAAJmElEQVRYw+zTS2jTcBwHcK0W6dwKUk9u8zDFx30iqCcV+k+yLmr1z7SJaTpoE9rSJJBRWcB20PZQenCDdrYexK5bL45eamGwCQ6nwl6Ig7H3ZIftMHw/EAV/qTJ1OqZe9cs/LTnkw/f/2vI///NPZFuFqba2So+5dofJsPWvkK0mc73lxPFjfspFuVwUG6k7YamqrfhTzGC2HGdZVvRDKD1asSj6RfG4xWza9gdtai3HXC6RZWUMlEhRytDQ/SdPXvIsC80s5t/tZagHBsJiLMtQS6TmwuGuEFAfijgSYSJ19Ud/p1aFhSo7sDB6JwaL4uxCVJe6wuGZlwzLRCJ1NeZNKYOFgpQhisWsyAjYr8xHo6lcKBftiYaHihGGMXLG6s2oKtgmX1kCT5+YzIjKmx4gQl2pNYnjIptQe08oLkr0K0n481OiLrGMb6GzJ5oKhXLhVCo1/TESYRmjkeE8NTs23rB9Pp+iUO3PBgaWH1J+HxthZRkD1NmTyt0HKRzODWGjUeD0h6urMmxUaKdPgTxNt7S0DKwk/SLDYNi8+U69UleoazqXm57RjBwneDiOA2qjUrs7lA4YAOXz+djAik9mIHju01cJMv1KZnREkjhBQEKd+VenavspxdUBGYxlMhkoFXv6EHMFY0GbewtS+QyEZpIIY45zZycnp7IIud31hl/MrJKioJEyWwKnnIF7gsQVsDb75m1nNBXOdc3MaciNGY6fCvQFvFNZiRRqKn6CDgLkVyil41k6k8nnE4lEfnRF4NzwpTY7vzD/+vWrpMYjeMf8arcueSenPFK1aT20r9JP+WG0J9ItmXxifLx0I9OyLEkCKjBY9iWTqsojpIEEv/1lKeCNZ93V65Z8275Knwi33D8Yg/Vp0xuNDl+//o6QGMwUBKOAEOJ5hGXGTUpqctXbFwgE+rzxfgmk9ZBPhiv2oDQ8PNzWFovF0tchyx4EEBI4AbroQxYEtztZ6O7zQqVAWTL9BGmyLPsmbty5MzIKkg6l2+4JiGGQxIFESm4SikkSUvvjZcYb6I47ieqKH871ToA0GaPkY5DujEKpdDqWKD3GpBsxbo/HI5CkRMI60SSpFuLd3rLUHc86nTWG728sQKqqYZ5vB2lkZKQNkiiNPdaQBJQueUiahEEQJK1y/UDpziRxzmrd/90dPnKoF+uSDNKLxRt6AFocG8Q86SRIJH2RHCRNOJ0kUHgVrHi88ZL1wgXrgW9nfMfhR4hX9T2maXXw/d3x8bHF0tjSA5WmkdNDkITHAwJIDofTSTgcRLBX5YvF1muNNluTbc/RNchw8hHN8yrPQ327o/f2xPO7kIlKDfE0zAuUc2WAbiUIp0TSDfBiv3z2bKPtTJPN1rzLtLbapw/10jQdDAZbHQ673R5sn3i+tDSY5AWwaU8264RPoZgDFslpzTbYiYZz1gu2piZbU/MVW/OVb8tUe/hRA023Bq8Gr9ob7Jcu2YO3brb30gRJQlOQrA3gkPpjbbx27XIj5GJjcxNIwFxpPn9gbW6f2y+b0KbBMI5bHKU6YR8414ofE5zT+a34dfDbvEFJYtImJGkhTJJcctglgfWDtof20JbStaM92na7dW0d2h02tsMmA3WehrCxs6igIngULz7ptK1fKIo3/xBIy8vv/T//932ftz3afs/t8QTC4bDbHXZJgAp4vQQBFjxgdYjDCRdEQxBUZm6qo2N5ghQoUZAFqMwnY5gKxTXWrT3sdrkAlHGDJHicLhdBQCieesRDBHwawtFcx5XeYDC4LEFhMinQgAGxpy1NS0/cpsIZBiS5GUmSIC1PwEXc9BAEcfOWB0icccrWY7OecDg6XJxA+xioS1UxnW2u3O6D28KMKbebQSbKJAEESE4QkMAbQXXVT2lPv8MxhZP064/j5Weqqmoa28h789H2dolBIMDo8CJlVlczmYwrQEiiKOJOwjV000V1bRwIy1mH4zHlXvOPT5fLz1iW1XY2+sCW6/P3RIQhBmkMcMTFSLxUWlmpBQinBF+IEkHgTlw+9nm41TGPS4fy/vFyubzwoaJpp5vnpDofRgjDENJ0hIxSLFaKREKzNe8t2BASyI3juPBl5rbuOQ4z3gAJTL17WdG6tjaayaX5bQyATGmoUIplZ2cjoVBkpeqtB4U7JZEiha5zlg1LYyKLFdb9Ub9/fOHdYOX8sebPiIvL7RjmwzAzvuHS3WxqNh6KRyLPV4q3vQEn+IFNSJI7T2/ZbLFsPRqgeLaw5o8CKbqwMAi1NbTn6vITFWrDFFXVX8WAEQJHMzMzs7UAeMI5kExx5M4ju3Z1MZJP4Y3X+egDP5AevBw80tKYBq5eeKxCSCpPD5dioXgoFAtlE4lUIlKDLYZTQk6gSB9J+kTJR/lYRWEPvc0/qJMWXg629G/LwIUdEwqUx9OLMzPxUCwWi2ez2cTISGTV6RZJWlFo2NAyTcPp4Hklp+pvTNI4WCoPQkhN0vYdQFJVmq6lEneBE4rHR0zFX4XNA59O5wAFDDqt8EBStOG1fHR6OhqdHn92eVOL9pok2ofJizN3TY3E4cmOZLOhxSEgpXPpNLiiVVUBEEjVC2v5PHAaoCZp344JgUJMLTKyoSxklErFSxmnU5SNQoFRTFQOQCzL85hReLO+vv42//o8gFrVZpLSJCZWn6cSoNR9U6lU4pUTR0dPnbzSO1U0SwMSgCo80o2lpeLBQ6vHIaNvSfsm0hxJVSdHgTI6OvrixSholuH2t1nabP0nkh0TvErnZExj2QqLdH0YdP44rNr3pDGa46hC36SJeD5p6v2iQNcbocXWnQzOI16VSVQnGbphkhr7qDUnu32e5nBO8lb7Jmtjj73ee14XJZD7LRszWcFUQcVUhExTyKiDYJbvSVa7/YIu4NA8bt+5bZ4zHB6K+3JiwVTQPgaNEUM69CLdJB3Z+gMQ9JvDQXuR5oDkgbsIl0h4FSmuYb+nH9qtsUFigTRsRv1Dku1kMDinp8FJ/bSKJMmJcHPs39wwfTj4dEyH9UfQ1oxhuG6/U3NOe5UWOFNwZ8iyKCKROvDVVB1FtsLzFW3pBlj9iSDSw0kYqeQ4Dm4LksKQSera0jqgs/Ppo+rDhw8v/YTTiLQzmZxaAhRJAwlRIoOMPS0Deqwne59O9V0886u/Om1nu5OAKurpHIBEDBPF43u+HmEbGNjTtunX6rGarnrnigYmy4jVlq5BEX+mnrPdJzqTnVDC3KNHfX2XLJv+WHtt1m6ItbceR33b/QUL7un+/lOnBiCOv5fFsum/fl//OK1PxqF2QZ0lJb8AAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </span>
  ),
  silhouette: (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>silhouette</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4284)" />
        <defs>
          <pattern
            id="pattern0_559_4284"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4284" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4284"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  ),
  'speech-bulloon': (
    <span className={icon({ size: 'footer' })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>speech bulloon</title>
        <rect width="24" height="24" fill="url(#pattern0_559_4287)" />
        <defs>
          <pattern
            id="pattern0_559_4287"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_559_4287" transform="scale(0.0138889)" />
          </pattern>
          <image
            id="image0_559_4287"
            width="72"
            height="72"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </span>
  ),
}
