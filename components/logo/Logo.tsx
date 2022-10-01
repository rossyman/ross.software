interface LogoProps {
  width: number
  height: number
}

export default function Logo({width, height}: LogoProps) {
  return (
    <div style={{width, height, minWidth: width, minHeight: height}}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 250 250'>
        <g clipPath='url(#a)'>
          <path fill='var(--text)' d='M0 0h10v10H0V0Zm10 0h10v10H10V0Zm10 0h10v10H20V0Zm10 0h10v10H30V0Zm10 0h10v10H40V0Zm10 0h10v10H50V0Zm10 0h10v10H60V0Zm40 0h10v10h-10V0Zm20 0h10v10h-10V0Zm20 0h10v10h-10V0Zm20 0h10v10h-10V0Zm20 0h10v10h-10V0Zm10 0h10v10h-10V0Zm10 0h10v10h-10V0Zm10 0h10v10h-10V0Zm10 0h10v10h-10V0Zm10 0h10v10h-10V0Zm10 0h10v10h-10V0ZM0 10h10v10H0V10Zm60 0h10v10H60V10Zm20 0h10v10H80V10Zm20 0h10v10h-10V10Zm30 0h10v10h-10V10Zm10 0h10v10h-10V10Zm10 0h10v10h-10V10Zm30 0h10v10h-10V10Zm60 0h10v10h-10V10ZM0 20h10v10H0V20Zm20 0h10v10H20V20Zm10 0h10v10H30V20Zm10 0h10v10H40V20Zm20 0h10v10H60V20Zm60 0h10v10h-10V20Zm20 0h10v10h-10V20Zm10 0h10v10h-10V20Zm10 0h10v10h-10V20Zm20 0h10v10h-10V20Zm20 0h10v10h-10V20Zm10 0h10v10h-10V20Zm10 0h10v10h-10V20Zm20 0h10v10h-10V20ZM0 30h10v10H0V30Zm20 0h10v10H20V30Zm10 0h10v10H30V30Zm10 0h10v10H40V30Zm20 0h10v10H60V30Zm20 0h10v10H80V30Zm10 0h10v10H90V30Zm10 0h10v10h-10V30Zm20 0h10v10h-10V30Zm10 0h10v10h-10V30Zm10 0h10v10h-10V30Zm10 0h10v10h-10V30Zm10 0h10v10h-10V30Zm20 0h10v10h-10V30Zm20 0h10v10h-10V30Zm10 0h10v10h-10V30Zm10 0h10v10h-10V30Zm20 0h10v10h-10V30ZM0 40h10v10H0V40Zm20 0h10v10H20V40Zm10 0h10v10H30V40Zm10 0h10v10H40V40Zm20 0h10v10H60V40Zm30 0h10v10H90V40Zm70 0h10v10h-10V40Zm20 0h10v10h-10V40Zm20 0h10v10h-10V40Zm10 0h10v10h-10V40Zm10 0h10v10h-10V40Zm20 0h10v10h-10V40ZM0 50h10v10H0V50Zm60 0h10v10H60V50Zm20 0h10v10H80V50Zm10 0h10v10H90V50Zm20 0h10v10h-10V50Zm10 0h10v10h-10V50Zm30 0h10v10h-10V50Zm30 0h10v10h-10V50Zm60 0h10v10h-10V50ZM0 60h10v10H0V60Zm10 0h10v10H10V60Zm10 0h10v10H20V60Zm10 0h10v10H30V60Zm10 0h10v10H40V60Zm10 0h10v10H50V60Zm10 0h10v10H60V60Zm20 0h10v10H80V60Zm20 0h10v10h-10V60Zm20 0h10v10h-10V60Zm20 0h10v10h-10V60Zm20 0h10v10h-10V60Zm20 0h10v10h-10V60Zm10 0h10v10h-10V60Zm10 0h10v10h-10V60Zm10 0h10v10h-10V60Zm10 0h10v10h-10V60Zm10 0h10v10h-10V60Zm10 0h10v10h-10V60ZM90 70h10v10H90V70Zm10 0h10v10h-10V70Zm10 0h10v10h-10V70Zm30 0h10v10h-10V70Zm20 0h10v10h-10V70ZM0 80h10v10H0V80Zm10 0h10v10H10V80Zm10 0h10v10H20V80Zm10 0h10v10H30V80Zm10 0h10v10H40V80Zm20 0h10v10H60V80Zm10 0h10v10H70V80Zm10 0h10v10H80V80Zm10 0h10v10H90V80Zm20 0h10v10h-10V80Zm20 0h10v10h-10V80Zm10 0h10v10h-10V80Zm10 0h10v10h-10V80Zm20 0h10v10h-10V80Zm20 0h10v10h-10V80Zm20 0h10v10h-10V80Zm20 0h10v10h-10V80ZM10 90h10v10H10V90Zm10 0h10v10H20V90Zm50 0h10v10H70V90Zm30 0h10v10h-10V90Zm20 0h10v10h-10V90Zm20 0h10v10h-10V90Zm20 0h10v10h-10V90Zm30 0h10v10h-10V90Zm40 0h10v10h-10V90ZM10 100h10v10H10v-10Zm20 0h10v10H30v-10Zm30 0h10v10H60v-10Zm20 0h10v10H80v-10Zm20 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM10 110h10v10H10v-10Zm40 0h10v10H50v-10Zm20 0h10v10H70v-10Zm10 0h10v10H80v-10Zm40 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm70 0h10v10h-10v-10ZM10 120h10v10H10v-10Zm20 0h10v10H30v-10Zm10 0h10v10H40v-10Zm20 0h10v10H60v-10Zm30 0h10v10H90v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 130h10v10H0v-10Zm10 0h10v10H10v-10Zm20 0h10v10H30v-10Zm130 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10ZM0 140h10v10H0v-10Zm40 0h10v10H40v-10Zm10 0h10v10H50v-10Zm10 0h10v10H60v-10Zm30 0h10v10H90v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 150h10v10H0v-10Zm20 0h10v10H20v-10Zm20 0h10v10H40v-10Zm40 0h10v10H80v-10Zm30 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm40 0h10v10h-10v-10ZM0 160h10v10H0v-10Zm20 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm20 0h10v10H60v-10Zm30 0h10v10H90v-10Zm20 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10ZM80 170h10v10H80v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 180h10v10H0v-10Zm10 0h10v10H10v-10Zm10 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm10 0h10v10H50v-10Zm10 0h10v10H60v-10Zm20 0h10v10H80v-10Zm10 0h10v10H90v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 190h10v10H0v-10Zm60 0h10v10H60v-10Zm30 0h10v10H90v-10Zm30 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 200h10v10H0v-10Zm20 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm20 0h10v10H60v-10Zm20 0h10v10H80v-10Zm10 0h10v10H90v-10Zm30 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 210h10v10H0v-10Zm20 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm20 0h10v10H60v-10Zm20 0h10v10H80v-10Zm20 0h10v10h-10v-10Zm50 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10ZM0 220h10v10H0v-10Zm20 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm20 0h10v10H60v-10Zm20 0h10v10H80v-10Zm10 0h10v10H90v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10ZM0 230h10v10H0v-10Zm60 0h10v10H60v-10Zm20 0h10v10H80v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm30 0h10v10h-10v-10ZM0 240h10v10H0v-10Zm10 0h10v10H10v-10Zm10 0h10v10H20v-10Zm10 0h10v10H30v-10Zm10 0h10v10H40v-10Zm10 0h10v10H50v-10Zm10 0h10v10H60v-10Zm20 0h10v10H80v-10Zm10 0h10v10H90v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm40 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm20 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Zm10 0h10v10h-10v-10Z' />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='var(--bg)' d='M0 0h250v250H0z' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
