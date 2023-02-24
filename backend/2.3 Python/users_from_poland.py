users = [
    {"name": "Kamil", "country": "Poland"},
    {"name": "John", "country": "USA"},
    {"name": "Yeti"}
]

users_from_poland = [user["name"] for user in users if user.get("country") == "Poland"]
print(f'Users from Poland: {users_from_poland}')
