import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
subjects = np.array(['OS', 'Python', 'JAVA', 'R', 'C++'])
scores = np.array([85, 90, 75, 80, 95])
df = pd.DataFrame({
'Subjects': subjects,
'Scores': scores
})
plt.figure(figsize=(8, 5))
plt.bar(df['Subjects'], df['Scores'])
plt.title("Students' Scores by Subject")
plt.xlabel("Subjects")
plt.ylabel("Scores")

plt.show()