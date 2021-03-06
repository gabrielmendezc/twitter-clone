import React, { FC, Fragment } from 'react'

interface Props {
  width?: string
  titleVisible?: boolean
}

export const Logo: FC<Props> = ({ width, titleVisible }) => (
  <svg
    viewBox="0 0 500 500"
    width={width ? width : '200'}
    version="1.1"
    id="svg_null"
  >
    <g id="root" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect id="background.accent" fill="none" x="0" y="0"></rect>
      <path
        d="M324.81 172.136l-23.325 -55.684c-0.284 -0.679 -0.857 -1.185 -1.553 -1.373c-0.696 -0.188 -1.437 -0.036 -2.01 0.411l-47.922 37.415l-47.922 -37.415c-0.573 -0.447 -1.315 -0.598 -2.01 -0.41c-0.696 0.187 -1.27 0.693 -1.553 1.372l-23.325 55.684c-0.39 0.93 -0.168 2.01 0.553 2.7l72.663 69.52c0.448 0.429 1.02 0.644 1.594 0.644c0 0 0 0 0 0c0.574 0 1.146 -0.215 1.594 -0.644l72.663 -69.52c0.721 -0.69 0.942 -1.77 0.553 -2.7zm-75.787 37.412c0.005 0.002 0.457 0.22 0.979 0.22c0.522 0 0.838 -0.162 0.917 -0.196c0.015 -0.007 6.839 -3.223 6.839 -3.223l-7.758 27.599l-7.757 -27.6l6.78 3.2zm0.977 -4.817l-9.468 -4.468l-10.45 -37.18l19.918 -4.704l19.919 4.705l-10.45 37.179l-9.469 4.468zm-65.973 -35.688l11.192 -12.757l-0.822 10.307l-10.37 2.45zm16.272 -17.643l16.127 -3.31l7.021 11.64l-24.27 5.734l1.122 -14.064zm0.396 -4.972l1.718 -21.57l11.389 18.88l-13.107 2.69zm22.165 3.215l18.258 5.913l-12.86 3.037l-5.398 -8.95zm36.023 5.913l18.257 -5.913l-5.399 8.95l-12.858 -3.037zm24.691 -7.466l16.127 3.31l1.121 14.063l-24.27 -5.733l7.022 -11.64zm2.625 -4.351l11.388 -18.881l1.718 21.57l-13.106 -2.69zm19.403 22.854l-0.821 -10.307l11.192 12.757l-10.37 -2.45zm-24.693 -23.199l-18.811 6.092l28.608 -22.336l-9.797 16.244zm-61.818 0l-9.798 -16.244l28.609 22.335l-18.811 -6.09zm-23.244 5.007l-10.768 12.274l12.09 -28.863l-1.322 16.59zm-0.228 22.824l8.577 11.893l-19.657 -9.276l11.08 -2.617zm4.969 -1.174l24.932 -5.89l9.403 33.456l-21.913 -10.34l-12.422 -17.226zm36.045 33.651l7.523 26.766l-25.376 -35.19l17.853 8.424zm26.734 0l17.853 -8.425l-25.377 35.191l7.524 -26.766zm1.71 -6.086l9.404 -33.455l24.93 5.89l-12.421 17.225l-21.913 10.34zm39.304 -26.391l11.08 2.617l-19.657 9.276l8.577 -11.893zm-0.228 -22.824l-1.322 -16.588l12.09 28.862l-10.768 -12.274zm-114.61 33.08l20.423 9.638l23.032 31.938l-43.456 -41.575zm100.492 9.637l20.423 -9.637l-43.455 41.576l23.032 -31.939z"
        id="shape.primary"
        fill="#BA6F25"
        fillRule="nonzero"
      ></path>
      {titleVisible && (
        <Fragment>
          <g id="Group-2" transform="translate(40.000000, 280.000000)">
            <rect id="Rectangle-35" x="0" y="0" width="420" height="60"></rect>
            <text
              id="headerText.primary"
              fontFamily="Roboto"
              fontSize="60"
              fontWeight="500"
              line-spacing="60"
              letterSpacing="3"
              fill="#fff"
              data-text-alignment="C"
              fontStyle="normal"
            >
              <tspan x="115.078125" y="52">
                {' '}
                QUBIT
              </tspan>
            </text>
          </g>
          <g id="Group" transform="translate(40.000000, 360.000000)">
            <rect id="Rectangle-36" x="0" y="0" width="420" height="35"></rect>
            <text
              id="captionText.primary"
              fontFamily="Roboto"
              fontSize="30"
              fontWeight="500"
              letterSpacing="1.5"
              fill="#fff"
              data-text-alignment="C"
              fontStyle="normal"
            >
              <tspan x="210" y="167.5"></tspan>
            </text>
          </g>
        </Fragment>
      )}
    </g>
  </svg>
)
