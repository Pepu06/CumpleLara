"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Gift } from 'lucide-react'
import Image from 'next/image'
import img1 from '@/public/img1.jpg'
import img2 from '@/public/img2.jpg'
import img3 from '@/public/img3.jpg'
import img4 from '@/public/img4.jpg'
import img5 from '@/public/img5.jpg'
import img6 from '@/public/img6.jpg'
import img7 from '@/public/img7.jpg'
import img8 from '@/public/img8.jpg'
import img9 from '@/public/img9.jpg'
import img10 from '@/public/img10.jpg'
import img11 from '@/public/img11.jpg'
import img12 from '@/public/img12.jpg'
import img13 from '@/public/img13.jpg'
import img14 from '@/public/img14.jpg'
import img15 from '@/public/img15.jpg'
import img16 from '@/public/img16.jpg'

export function CumpleanosNovia() {
  const [showGift, setShowGift] = useState(false)
  const [timeLeft, setTimeLeft] = useState('')
  const [isBirthday, setIsBirthday] = useState(false)

  // Cambia esta fecha al cumpleaños de tu novia
  const birthdayDate = new Date('2024-08-20')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = birthdayDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
        setIsBirthday(false)
      } else {
        setTimeLeft('¡Es hoy!')
        setIsBirthday(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const photos = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 p-4">
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-md border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-white">
            ¡Feliz Cumpleaños, Amor! 🎉
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <Heart className="w-24 h-24 text-red-500 mx-auto animate-pulse" />
          </div>
          <p className="text-center text-xl mb-6 text-white items-center justify-center">
            Hola gorda bueno escribo esto en el avion saliendo para bariloche. Nuestro cuarto cumpleaños juntos, tus 18 y nuestro viaje de egresados. Nos conocimos el primer año que pudimos ir al colegio y nos estamos por egresar juntos y no puedo estar mas feliz de que sea asi, te amo hasta el infinito y mas alla de toy story 18 mi amor
❤️Feliz cumple❤️
          </p>
          <div className="text-center text-2xl font-semibold mb-6 text-white">
            {timeLeft}
          </div>
          {isBirthday && (
            <>
              <div className="flex justify-center mb-8">
                <Button
                  onClick={() => setShowGift(!showGift)}
                  className="bg-white text-pink-600 hover:bg-pink-100 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
                >
                  <Gift className="w-6 h-6" />
                  {showGift ? "Ocultar regalo" : "Ver regalo"}
                  <Gift className="w-6 h-6" />
                </Button>
              </div>
              {showGift && (
                <div className="overflow-x-auto flex space-x-4 p-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="flex-shrink-0 w-64 h-64 relative">
                      <Image
                        src={photo}
                        alt={`Foto ${index + 1} de la pareja`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
