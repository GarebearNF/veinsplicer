Hooks.on("ready", () => {

    // add onto the feature list as demonstrated in the SRD classes 
    // the syntax is: Compendium.{pack_key}.{pack_name}.{item.id}
    // for items held in the Custom Classes pack use "Compendium.custom-classes.classfeatures.ID_here"
    CONFIG.DND5E.classFeatures = {
        "veinsplicer": {
            "subclasses": {
                "weaver's-call": {
                    "label": "Weaver's Call",
                    "source": "Homebrew",
                    "features": {
                        "3": ["Compendium.veinsplicer.classfeatures.F466UvNQTZ4W98vH"],
                        "7": ["Compendium.veinsplicer.classfeatures.Dv8zDopFvDKI08mJ"],
                        "13": ["Compendium.veinsplicer.classfeatures.31f6FnIatMD3Xpfg", "Compendium.veinsplicer.classfeatures.fBqclbDc1gM2wzq5", "Compendium.veinsplicer.classfeatures.flNluguVGkIWyaMS", "Compendium.veinsplicer.classfeatures.7jJFU5e2uNHQ96S0"],
                        "18": ["Compendium.veinsplicer.classfeatures.MpQLRTTqDGyICeVY"]
                    }
                },
                "marionette's-call": {
                    "label": "Marionette’s Call",
                    "source": "Homebrew",
                    "features": {
                        "3": ["Compendium.veinsplicer.classfeatures.2mWEhyoGbK3pHI0s", "Compendium.veinsplicer.classfeatures.Aa9OyJ9yp1mtPlJg", "Compendium.veinsplicer.classfeatures.qDE2DlXsZyjp0Vdb", "Compendium.veinsplicer.classfeatures.yYeJEuun2xJ5AY4w"],
                        "7": ["Compendium.veinsplicer.classfeatures.fsLPOYEdu8yTc74T"],
                        "13": ["Compendium.veinsplicer.classfeatures.uT83N6W5Vqnuhrvv"],
                        "18": ["Compendium.veinsplicer.classfeatures.x1Z7wn6drvEAhae1"]
                    }
                },
                "butcher's-call": {
                    "label": "Butcher’s Call",
                    "source": "Homebrew",
                    "features": {
                        "3": ["Compendium.veinsplicer.classfeatures.j8Q72tPIe7GucK9C"],
                        "7": ["Compendium.veinsplicer.classfeatures.cQqFo5cB7T03jnoR", "Compendium.veinsplicer.classfeatures.SiNKLKl27fI8toGP", "Compendium.veinsplicer.classfeatures.rbAEddNrb9PXK761", "Compendium.veinsplicer.classfeatures.8Dh6yZ7Fu9IlJxkk", "Compendium.veinsplicer.classfeatures.2OwRTr00KqZWHkZo", "Compendium.veinsplicer.classfeatures.KWVy6goY4OgiJNv5"],
                        "13": ["Compendium.veinsplicer.classfeatures.teegnw59NvaD9Fsl"],
                        "18": ["Compendium.veinsplicer.classfeatures.BkMu4t1yN7eO4Q69"]
                    }
                }
            },
            "features": {
                "1": ["Compendium.veinsplicer.classfeatures.wJFOulwZ75GTjbCn"],
                "2": ["Compendium.veinsplicer.classfeatures.s3qBKTPTOgphxG72", "Compendium.veinsplicer.classfeatures.aI1yl6Ner0En5B0G", "Compendium.veinsplicer.classfeatures.WjMn552U7f30E8P2", "Compendium.veinsplicer.classfeatures.sxpZlw0NBhpfstTT"],
                "3": ["Compendium.veinsplicer.classfeatures.AYMUbc3it9IZx5oP"],
		"4": ["Compendium.veinsplicer.classfeatures.1Nxdr3gBcIxQ1EjI"],
                "5": ["Compendium.veinsplicer.classfeatures.4UlugoWqIsuJxlTq", "Compendium.veinsplicer.classfeatures.aJ0YPB3ELnd3ztzA"],
                "6": ["Compendium.veinsplicer.classfeatures.2WJm8ShhzrkjE2Og", "Compendium.veinsplicer.classfeatures.l33oxvKLAg6BCG14"],
		"8": ["Compendium.veinsplicer.classfeatures.1Nxdr3gBcIxQ1EjI", "Compendium.veinsplicer.classfeatures.5oPYfl5rLWheZPZZ"],
                "9": ["Compendium.veinsplicer.classfeatures.ToKTfKO5PuiB0rDU", "Compendium.veinsplicer.classfeatures.Ad2JwxZuRbbK1pNL"],
		"10": ["Compendium.veinsplicer.classfeatures.OBcTdbVwjbL5P8sH"],
                "11": ["Compendium.veinsplicer.classfeatures.urv7dBkvj3WkmnSG"],
		"12": ["Compendium.veinsplicer.classfeatures.1Nxdr3gBcIxQ1EjI"],
		"13": ["Compendium.veinsplicer.classfeatures.JDpi5cHbxLjVPxyn"],
		"14": ["Compendium.veinsplicer.classfeatures.oAj29hHmwg16vfGB"],
                "15": ["Compendium.veinsplicer.classfeatures.T23M5IPDKBnJ0Sbl"],
		"16": ["Compendium.veinsplicer.classfeatures.1Nxdr3gBcIxQ1EjI"],
                "19": ["Compendium.veinsplicer.classfeatures.1Nxdr3gBcIxQ1EjI", "Compendium.veinsplicer.classfeatures.o0CVDjjUGT4Rvta2"],
                "20": ["Compendium.veinsplicer.classfeatures.325QE0hU2C5tRFJj"]
            }
        }
    };
});


class CustomClasses {

    static async exportList() {
        const packData = await game.packs.get("veinsplicer.classItems").getContent()
        const data = packData.reduce((a, v) => { return a += `${v.name}: ${v.id}\r` }, '')
        let date = new Date().toDateString().replace(/\s/g, "-");
        const filename = `CustomClasses-${date}.txt`;
        saveDataToFile(data, "text/plain", filename)
    }
}

globalThis.CustomClasses = CustomClasses