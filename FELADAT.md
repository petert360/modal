# Projekt - Modal

Date: 2020/11/20

# **Modal**

Git-et használj! A repository-d neve: **modal**. Case sensitive-en.

Egy modal-t, azaz felugró ablakot kell készítened.
**A modal főbb részei:**

![https://s3.amazonaws.com/thinkific/file_uploads/219412/images/998/54f/93d/modal.jpg](https://s3.amazonaws.com/thinkific/file_uploads/219412/images/998/54f/93d/modal.jpg)

- bezárás gomb
- fejléc
- tartalmi rész
- lábléc (alsó gombok jobbra igazítva)
- A modal szélessége alaphelyzetben 100%, 560 pixel felett 50%
- **A modalt nem dinamikusan JavaScriptből kell létrehozni, hanem már eleve a DOM része lehet!**

**Működés:**

- A modalt bármilyen gomb vagy egyéb elem eseményéhez hozzá lehessen rendelni, tehát pl.: ha rákattintok egy gomra akkor jelenik meg
- A modal mind vertikálisan, mind horizontálisan középre kell legyen pozícionálva
- Amikor a modal megnyílik a hátteret egy részben áttetsző réteggel le kell takarni, a modal-t focusba kell helyezni

    ![https://s3.amazonaws.com/thinkific/file_uploads/219412/images/a0b/a49/b7f/modal-open.jpg](https://s3.amazonaws.com/thinkific/file_uploads/219412/images/a0b/a49/b7f/modal-open.jpg)

- A modal egy egyszerű animáció kíséretében jelenjen meg (pl.: fade)
- A modal egy egyszerű animáció kíséretében tűnjön el bezáráskor
- A modalon kívülre kattintva is automatikusan záródjon be a modal, tűnjön el az overlay réteg