document.getElementById("1").textContent = `x = int(input("Enter first number: "))
y = int(input("Enter second number: "))

print("Arithmetic Operators")
print("Addition:", x + y)
print("Subtraction:", x - y)
print("Multiplication:", x * y)
print("Division:", x / y if y != 0 else "Not possible")
print("Modulus:", x % y if y != 0 else "Not possible")
print("Exponent:", x ** y)
print("Floor Division:", x // y if y != 0 else "Not possible")

print("\nComparison Operators")
print("Equal:", x == y)
print("Not Equal:", x != y)
print("Greater Than:", x > y)
print("Less Than:", x < y)
print("Greater Than or Equal:", x >= y)
print("Less Than or Equal:", x <= y)

print("\nLogical Operators")
print("AND:", x > 0 and y > 0)
print("OR:", x > 0 or y > 0)
print("NOT:", not (x > 0))

print("\nAssignment Operators")
a = x
a += y
print("After +=:", a)
a = x
a -= y
print("After -=:", a)
a = x
a *= y
print("After *=:", a)
a = x
if y != 0:
    a /= y
    print("After /=:", a)
a = x
if y != 0:
    a %= y
    print("After %=:", a)
a = x
a //= y if y != 0 else 1
print("After //=:", a)
a = x
a **= y
print("After **=:", a)

print("\nBitwise Operators")
print("AND:", x & y)
print("OR:", x | y)
print("XOR:", x ^ y)
print("NOT x:", ~x)
print("Left Shift:", x << 1)
print("Right Shift:", x >> 1)

print("\nMembership Operators")
text = input("Enter a string: ")
char = input("Enter a character to search: ")
print("In:", char in text)
print("Not In:", char not in text)

print("\nIdentity Operators")
a = [x, y]
b = a
c = [x, y]
print("a is b:", a is b)
print("a is c:", a is c)
print("a is not c:", a is not c)`;

document.getElementById("2").textContent = `a = int(input("Enter first integer: "))
b = int(input("Enter second integer: "))
s = a + b

if 15 <= s <= 20:
    print("Sum:", s)

a = int(input("\nEnter first integer: "))
b = int(input("Enter second integer: "))

if a > b:
    print("Largest number:", a)
elif b > a:
    print("Largest number:", b)
else:
    print("Both numbers are equal")

m1 = int(input("\nEnter marks for subject 1: "))
m2 = int(input("Enter marks for subject 2: "))
m3 = int(input("Enter marks for subject 3: "))

if m1 < 40 or m2 < 40 or m3 < 40:
    print("Fail Grade")
else:
    percentage = (m1 + m2 + m3) / 3
    print("Percentage:", percentage)

    if percentage >= 75:
        print("Outstanding")
    elif percentage >= 70:
        print("Distinction Grade")
    elif percentage >= 60:
        print("A Grade")
    elif percentage >= 50:
        print("B Grade")
    elif percentage >= 40:
        print("C Grade")
    else:
        print("Fail Grade")

n = int(input("\nEnter a number: "))
result = "Even" if n % 2 == 0 else "Odd"
print(result)`;

document.getElementById("3").textContent = `n = int(input("Enter a number: "))
temp = n
rev = 0

while temp > 0:
    digit = temp % 10
    rev = rev * 10 + digit
    temp //= 10

if n == rev:
    print("Palindrome Number")
else:
    print("Not a Palindrome Number")

n = int(input("\nEnter a number: "))
temp = n
sum = 0
power = len(str(n))

while temp > 0:
    digit = temp % 10
    sum += digit ** power
    temp //= 10

if n == sum:
    print("Armstrong Number")
else:
    print("Not an Armstrong Number")

n = int(input("\nEnter a number: "))

if n <= 1:
    print("Not a Prime Number")
else:
    for i in range(2, n):
        if n % i == 0:
            print("Not a Prime Number")
            break
    else:
        print("Prime Number")

rows = 4

print("\nPattern 1")
for i in range(1, rows + 1):
    print("*" * i)

print("\nPattern 2")
for i in range(1, rows + 1):
    print(" " * (rows - i) + "*" * i)

print("\nPattern 3")
for i in range(rows, 0, -1):
    print("*" * i)

print("\nPattern 4")
for i in range(1, rows + 1):
    print(str(i) * i)

print("\nPattern 5")
for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

print("\nPattern 6")
for i in range(1, rows + 1):
    print("*" * i)

print("\nPattern 7")
for i in range(1, rows + 1):
    print("*" * (i + 1))`;


document.getElementById("4").textContent = `with open("sample.txt", "r") as file:
    print(file.read())

with open("sample.txt", "r") as file:
    for i in range(5):
        line = file.readline()
        if not line:
            break
        print(line, end="")

with open("sample.txt", "r") as file:
    lines = file.readlines()
    print("\nNumber of lines:", len(lines))

with open("sample.txt", "w") as file:
    file.write("DKTE-TEI-Ich-ETC-Dept.")

with open("sample.txt", "r") as file:
    print(file.read())`;



document.getElementById("5").textContent = `from machine import Pin
import time

led = Pin(13, Pin.OUT)

while True:
    led.value(1)
    time.sleep(0.5)
    led.value(0)
    time.sleep(0.5)`;



document.getElementById("6").textContent = `from machine import Pin
from utime import sleep_ms

button = Pin(0, Pin.IN, Pin.PULL_UP)
led = Pin(1, Pin.OUT)

state = 0

while True:
    if button.value() == 0:
        state = 1 - state
        led.value(state)
        sleep_ms(200)

        while button.value() == 0:
            sleep_ms(10)`;


document.getElementById("7").textContent = `from machine import Pin
import utime

trigger = Pin(14, Pin.OUT)
echo = Pin(15, Pin.IN)

def ultra():
    trigger.low()
    utime.sleep_us(2)
    trigger.high()
    utime.sleep_us(5)
    trigger.low()

    while echo.value() == 0:
        signaloff = utime.ticks_us()

    while echo.value() == 1:
        signalon = utime.ticks_us()

    timepassed = signalon - signaloff
    distance = (timepassed * 0.0343) / 2

    print("The distance from object is", distance, "cm")

while True:
    ultra()
    utime.sleep(1)`;



document.getElementById("8").textContent = `from machine import Pin
from time import sleep

pir_pin = Pin(22, Pin.IN)
led_pin = Pin(21, Pin.OUT)

while True:
    if pir_pin.value():
        print("Motion detected!")
        led_pin.value(1)

    sleep(1)
    led_pin.value(0)`;



document.getElementById("9").textContent = `from machine import Pin
import utime

rs = Pin(0, Pin.OUT)
e = Pin(1, Pin.OUT)
d4 = Pin(2, Pin.OUT)
d5 = Pin(3, Pin.OUT)
d6 = Pin(4, Pin.OUT)
d7 = Pin(5, Pin.OUT)

def pulse_e():
    e.value(1)
    utime.sleep_us(1)
    e.value(0)
    utime.sleep_us(50)

def send_nibble(nibble):
    d4.value((nibble >> 0) & 1)
    d5.value((nibble >> 1) & 1)
    d6.value((nibble >> 2) & 1)
    d7.value((nibble >> 3) & 1)
    pulse_e()

def send_byte(data, is_data):
    rs.value(is_data)
    send_nibble(data >> 4)
    send_nibble(data & 0x0F)

    if not is_data:
        if data == 0x01 or data == 0x02:
            utime.sleep_ms(2)
        else:
            utime.sleep_us(50)

def lcd_init():
    rs.value(0)
    e.value(0)
    utime.sleep_ms(20)

    send_nibble(0x03)
    utime.sleep_ms(5)
    send_nibble(0x03)
    utime.sleep_us(150)
    send_nibble(0x03)
    utime.sleep_us(150)
    send_nibble(0x02)

    send_byte(0x28, False)
    send_byte(0x0C, False)
    send_byte(0x01, False)
    send_byte(0x06, False)

def lcd_print(text):
    for ch in text:
        send_byte(ord(ch), True)

lcd_init()
lcd_print("Hello World!")`;



document.getElementById("10").textContent = `import network
import urequests
import time
from machine import ADC

SSID = "Your_WiFi_Name"
PASSWORD = "Your_WiFi_Password"
THINGSPEAK_API_KEY = "Your_ThingSpeak_Write_API_Key"

adc = ADC(26)

def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    if not wlan.isconnected():
        print("Connecting to WiFi...")
        wlan.connect(SSID, PASSWORD)

        timeout = 30
        while not wlan.isconnected() and timeout > 0:
            time.sleep(1)
            timeout -= 1

    if wlan.isconnected():
        print("Connected to WiFi")
        print("IP Address:", wlan.ifconfig()[0])
        return wlan
    else:
        raise RuntimeError("WiFi connection failed")

def read_temp():
    raw = adc.read_u16()
    voltage = (raw / 65535) * 3.3
    temperature_c = voltage * 100
    return round(temperature_c, 2)

def send_to_thingspeak(temp):
    url = (
        "https://api.thingspeak.com/update?api_key="
        + THINGSPEAK_API_KEY
        + "&field1="
        + str(temp)
    )

    response = None

    try:
        response = urequests.get(url)
        result = response.text
        print("ThingSpeak response:", result)

        if result.strip() == "0":
            print("Upload failed. Check API key or upload interval.")
        else:
            print("Temperature uploaded successfully")

    except Exception as error:
        print("Upload error:", error)

    finally:
        if response is not None:
            response.close()

connect_wifi()

while True:
    temperature = read_temp()
    print("Temperature (C):", temperature)

    send_to_thingspeak(temperature)

    time.sleep(20)`;



document.getElementById("11").textContent = `import network
import time
import json
from machine import Pin, PWM
from umqtt.simple import MQTTClient

SSID = "Your_WiFi_Name"
PASSWORD = "Your_WiFi_Password"
BLYNK_AUTH_TOKEN = "Your_Blynk_Auth_Token"

BLYNK_SERVER = "blynk.cloud"
BLYNK_PORT = 1883

servo = PWM(Pin(15))
servo.freq(50)

def set_angle(angle):
    angle = max(0, min(180, int(angle)))
    pulse_us = 500 + (angle / 180) * 2000
    duty = int((pulse_us / 20000) * 65535)
    servo.duty_u16(duty)
    print("Servo angle:", angle)

def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)

    if not wlan.isconnected():
        wlan.connect(SSID, PASSWORD)

        timeout = 30
        while not wlan.isconnected() and timeout > 0:
            print("Connecting to WiFi...")
            time.sleep(1)
            timeout -= 1

    if not wlan.isconnected():
        raise RuntimeError("WiFi connection failed")

    print("WiFi connected:", wlan.ifconfig()[0])

def on_message(topic, msg):
    try:
        data = json.loads(msg)
        angle = int(data["value"])
        set_angle(angle)
    except Exception as error:
        print("Invalid message:", error)

connect_wifi()

client = MQTTClient(
    "pico_servo",
    BLYNK_SERVER,
    port=BLYNK_PORT,
    user="device",
    password=BLYNK_AUTH_TOKEN,
    ssl=False
)

client.set_callback(on_message)
client.connect()
client.subscribe(b"downlink/ds/servo")

print("Connected to Blynk.Cloud")
set_angle(90)

while True:
    try:
        client.check_msg()
        time.sleep(0.1)
    except Exception as error:
        print("Connection error:", error)
        time.sleep(3)
        try:
            client.disconnect()
        except Exception:
            pass
        client.connect()
        client.subscribe(b"downlink/ds/servo")`;




function loadExperimentFromURL() {
    const path = window.location.pathname;
    const match = path.match(/\/(\d+)\/?$/);

    if (!match) return;

    const experimentNumber = match[1];
    const codeBox = document.getElementById(experimentNumber);

    if (codeBox) {
        codeBox.textContent = codeBox.textContent;
        codeBox.dispatchEvent(new Event("input", { bubbles: true }));
    }
}

document.addEventListener("DOMContentLoaded", loadExperimentFromURL);

if (document.readyState !== "loading") {
    loadExperimentFromURL();
}