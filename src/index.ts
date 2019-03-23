class MyClass {
    print(message: string) {
        console.log(`COOL MSG: ${message}`)
    }
}

export const handler = async (event: any = {}): Promise<any> => {
    const myClass = new MyClass()
    myClass.print("Hello Amanda!")
    const response = JSON.stringify(event, null, 2);
    return response;
}