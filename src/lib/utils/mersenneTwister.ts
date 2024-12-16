/**
 * Mersenne Twister RNG implementation in TypeScript as a single factory function with helper methods.
 * Ported from the JavaScript version by Makoto Matsumoto and Takuji Nishimura, and encapsulated by Sean McCullough.
 *
 * Usage:
 * const mt = createMersenneTwister(123); // with seed
 * const rand = mt.random(); // returns a random number between [0,1)
 *
 * If no seed is provided, it uses the current time.
 */

export function seededRandom(seed: number = new Date().getTime()) {
  // Period parameters
  const N = 624
  const M = 397
  const MATRIX_A = 0x9908b0df /* constant vector a */
  const UPPER_MASK = 0x80000000 /* most significant w-r bits */
  const LOWER_MASK = 0x7fffffff /* least significant r bits */

  const mt = new Array<number>(N) // state vector
  let mti = N + 1 // mti == N+1 means mt[N] is not initialized

  init_genrand(seed)

  function init_genrand(s: number) {
    mt[0] = s >>> 0
    for (mti = 1; mti < N; mti++) {
      const prev = mt[mti - 1] ^ (mt[mti - 1] >>> 30)
      mt[mti] = (((((prev & 0xffff0000) >>> 16) * 1812433253) << 16) + (prev & 0x0000ffff) * 1812433253 + mti) >>> 0
    }
  }

  function init_by_array(init_key: number[], key_length: number) {
    let i = 1
    let j = 0
    let k = N > key_length ? N : key_length

    init_genrand(19650218)
    for (; k > 0; k--) {
      const prev = mt[i - 1] ^ (mt[i - 1] >>> 30)
      mt[i] =
        (mt[i] ^ (((((prev & 0xffff0000) >>> 16) * 1664525) << 16) + (prev & 0x0000ffff) * 1664525)) + init_key[j] + j
      mt[i] >>>= 0
      i++
      j++
      if (i >= N) {
        mt[0] = mt[N - 1]
        i = 1
      }
      if (j >= key_length) j = 0
    }

    for (k = N - 1; k > 0; k--) {
      const prev = mt[i - 1] ^ (mt[i - 1] >>> 30)
      mt[i] = (mt[i] ^ (((((prev & 0xffff0000) >>> 16) * 1566083941) << 16) + (prev & 0x0000ffff) * 1566083941)) - i
      mt[i] >>>= 0
      i++
      if (i >= N) {
        mt[0] = mt[N - 1]
        i = 1
      }
    }

    mt[0] = 0x80000000 // MSB is 1; assuring non-zero initial array
  }

  function genrand_int32(): number {
    let y: number
    const mag01 = [0x0, MATRIX_A]

    if (mti >= N) {
      let kk: number

      if (mti === N + 1) {
        init_genrand(5489) // default seed
      }

      for (kk = 0; kk < N - M; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1] & LOWER_MASK)
        mt[kk] = mt[kk + M] ^ (y >>> 1) ^ mag01[y & 0x1]
      }

      for (; kk < N - 1; kk++) {
        y = (mt[kk] & UPPER_MASK) | (mt[kk + 1] & LOWER_MASK)
        mt[kk] = mt[kk + (M - N)] ^ (y >>> 1) ^ mag01[y & 0x1]
      }

      y = (mt[N - 1] & UPPER_MASK) | (mt[0] & LOWER_MASK)
      mt[N - 1] = mt[M - 1] ^ (y >>> 1) ^ mag01[y & 0x1]

      mti = 0
    }

    y = mt[mti++]
    // Tempering
    y ^= y >>> 11
    y ^= (y << 7) & 0x9d2c5680
    y ^= (y << 15) & 0xefc60000
    y ^= y >>> 18

    return y >>> 0
  }

  function genrand_int31(): number {
    return genrand_int32() >>> 1
  }

  function genrand_real1(): number {
    return genrand_int32() * (1.0 / 4294967295.0)
  }

  function random(): number {
    return genrand_int32() * (1.0 / 4294967296.0)
  }

  function genrand_real3(): number {
    return (genrand_int32() + 0.5) * (1.0 / 4294967296.0)
  }

  function genrand_res53(): number {
    const a = genrand_int32() >>> 5
    const b = genrand_int32() >>> 6
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0)
  }

  return {
    init_genrand,
    init_by_array,
    genrand_int32,
    genrand_int31,
    genrand_real1,
    random,
    genrand_real3,
    genrand_res53,
  }
}
