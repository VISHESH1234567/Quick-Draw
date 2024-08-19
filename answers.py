import sys
import json
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

# Read data from stdin
input_data = sys.stdin.read()
canvas_array = json.loads(input_data)
canvas_array = np.array(canvas_array)

values = ["apple","pineapple","banana","t-shirt","pencil","pants","cat","car","envelope","eye",
          "star","mouth","umbrella","teddy-bear","tent","guitar","headphones","camera","calculator","door",
          "birthday-cake","bicycle","traffic-light","tree","wine-glass","skateboard","pizza","octopus","light-bulb",
          "ladder","hourglass","helicopter","donut","ice-cream","crown","butterfly","leaf","laptop","skull","jail"]

def get_array_resized(array):
    new_array = np.zeros((504,504))
    width=14
    for i in range(504):
        for j in range(504):
            if array[i][j]==1:
                topd = min(i,width)
                bottomd = min(width,503-i)
                leftd = min(width,j)
                rightd = min(width,503-j)
                new_array[i-topd:i+bottomd,j-leftd:j+rightd] = np.ones((topd+bottomd,leftd+rightd))
    output = np.zeros((28,28))
    for i in range(28):
        for j in range(28):
            output[i][j] = np.sum(new_array[18*i:18*(i+1), 18*j:18*(j+1)])/(18*18)
    return output

model2 = Sequential([
    Conv2D(24, (5, 5), activation='relu', input_shape=(28, 28, 1), padding="same"),
    MaxPooling2D((2, 2)),
    Dropout(0.15),
    Conv2D(32, (5, 5), activation='relu',padding="same"),
    MaxPooling2D((2, 2)),
    Dropout(0.15),
    Conv2D(48, (5, 5), activation='relu',padding="same"),
    MaxPooling2D((2, 2)),
    Dropout(0.15),
    Flatten(),
    Dense(400, activation='relu'),
    Dense(len(values), activation='softmax')
])
model2.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
model2.load_weights('./final_weights.h5')

array = []
for i in range(6):
    array.append(get_array_resized(canvas_array[i]))

array = np.array(array)*255.0
prediction = model2.predict(array,verbose=0)
output=np.argmax(prediction, axis=1)
results = np.array(values)[output]
print(results[0]+','+results[1]+','+results[2]+','+results[3]+','+results[4]+','+results[5])

# print("1,2,3,4,5,6")