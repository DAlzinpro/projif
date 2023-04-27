import openai

openai.api_key = "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"
print("gay")
perg = input("")
completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": perg}])
print(completion.choices[0].message.content)
