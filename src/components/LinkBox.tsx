import Link, { LinkProps } from 'next/link'
import React, { FC, MouseEventHandler, useMemo, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

const HyperLink = styled.a`
    width: 10em;
    height: 10em;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    display: flex;
    flex-direction: column;
`

const maxRadius = 120

const LinkBox: FC<LinkProps & { className?: string }> = ({ children, className, ...props }) => {
    const [radius, setRadius] = useState(0)
    const [{ x, y }, setCoords] = useState({ x: 0, y: 0 })
    const ref = useRef<HTMLAnchorElement>(null)

    const { colors } = useTheme()
    const colorsToPickFrom = useMemo(() => [colors.highlight_20, colors.secondary_20, colors.primary_20], [colors])

    const timestamps = useRef<[number, number]>([0, 0])
    const animId = useRef<number>(0)

    const [color, setColor] = useState(colorsToPickFrom[Math.floor(Math.random() * colorsToPickFrom.length)])

    const animateRadius = (timestamp: number, direction: number) => {
        let [start, previousTimestamp] = timestamps.current

        if (!start) {
            start = timestamp
        }

        const elapsed = timestamp - start

        if (previousTimestamp !== timestamp) {
            const delta = direction * elapsed
            console.log(radius, delta, direction, radius + delta + direction)
            const newRadius = Math.min(maxRadius, Math.max(0, radius + delta + direction))
            setRadius(newRadius)

            if (newRadius != 0 && newRadius != maxRadius) {
                timestamps.current = [start, timestamp]
                animId.current = requestAnimationFrame((ts) => animateRadius(ts, direction))
            } else {
                timestamps.current = [0, 0]
            }
        }
    }

    const onMouseEnter = () => {
        setColor(colorsToPickFrom[Math.floor(Math.random() * colorsToPickFrom.length)])
        if (animId.current) cancelAnimationFrame(animId.current)
        animId.current = requestAnimationFrame((ts) => animateRadius(ts, 1))
    }

    const onMouseLeave = () => {
        if (animId.current) cancelAnimationFrame(animId.current)
        animId.current = requestAnimationFrame((ts) => animateRadius(ts, -1))
    }

    const onMouseMove: MouseEventHandler<HTMLAnchorElement> = (e) => {
        const container = ref.current
        if (!container) return

        const relativeX = e.clientX - container.offsetLeft
        const relativeY = e.clientY - container.offsetTop

        setCoords({ x: relativeX, y: relativeY })
    }

    return (
        <Link passHref={true} {...props}>
            <HyperLink
                className={className}
                ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                style={{
                    background: radius
                        ? `radial-gradient(circle at ${x}px ${y}px, ${color} 0%, ${colors.white_5} calc(0% + ${radius}px))`
                        : colors.white_5,
                }}
            >
                {children}
            </HyperLink>
        </Link>
    )
}

export default LinkBox
